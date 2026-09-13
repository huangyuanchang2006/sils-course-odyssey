(function () {
  "use strict";

  document.documentElement.classList.add("sils-ready");

  const data = window.SILS_DATA;

  if (!data) {
    document.body.innerHTML = "<p>课程数据加载失败。请确认 data.js 与 index.html 位于同一目录。</p>";
    return;
  }

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const scrollBehavior = () => reducedMotion.matches ? "auto" : "smooth";
  const fieldText = (value) => escapeHtml(value || "原表暂未填写");

  const escapeHtml = (value = "") =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const languageLabel = {
    English: "英语",
    Japanese: "日语"
  };

  const termLabel = (term) => term.replaceAll("Spring", "春季").replaceAll("Fall", "秋季");

  function syllabusLinks(course) {
    const links = Array.isArray(course.syllabus)
      ? course.syllabus
      : course.syllabus
        ? [course.syllabus]
        : [];

    return links
      .map(
        (url, index) =>
          `<a class="text-link" href="${escapeHtml(url)}" target="_blank" rel="noreferrer">查看官方 Syllabus${links.length > 1 ? ` ${index + 1}` : ""}</a>`
      )
      .join("<span aria-hidden=\"true\"> · </span>");
  }

  function metaChips(course) {
    return [
      course.provider,
      `${course.credits} 学分`,
      termLabel(course.term),
      languageLabel[course.language] || course.language,
      course.teacher === "待补充" ? "教师待补充" : course.teacher
    ]
      .map((item) => `<span class="meta-chip">${escapeHtml(item)}</span>`)
      .join("");
  }

  function renderFeatured() {
    const container = $("[data-featured-list]");
    const featuredOrder = [
      "introduction-to-business-01",
      "introduction-to-microeconomics-01",
      "media-popular-culture-01",
      "philosophy-fys-b-61",
      "science-technology-society-01"
    ];
    const featured = featuredOrder
      .map((id) => data.courses.find((course) => course.id === id))
      .filter(Boolean);

    container.innerHTML = featured
      .map(
        (course, index) => `
          <details class="featured-course" name="captains-logs" data-featured-id="${escapeHtml(course.id)}" ${index === 0 ? "open" : ""}>
            <summary>
              <span class="featured-owner"><small class="log-index">LOG ${String(index + 1).padStart(2, "0")}</small>${escapeHtml(course.takenBy)}</span>
              <span class="featured-title">${escapeHtml(course.title)}</span>
              <span class="featured-verdict">${escapeHtml(course.verdict)}</span>
              <span class="expand-mark" aria-hidden="true">+</span>
            </summary>
            <div class="featured-body">
              <div class="feature-facts">
                ${metaChips(course)}
                <span class="meta-chip">课程负担 ${course.workload}/5</span>
                <span class="meta-chip">Group Work: ${escapeHtml(course.groupLabel)}</span>
              </div>
              <div class="feature-story">
                <p class="log-attribution">${escapeHtml(course.takenBy)} 的修课原话</p>
                <p class="source-copy">${escapeHtml(course.experience)}</p>
                <div class="detail-pairs">
                  <div>
                    <strong>适合谁</strong>
                    <p>${escapeHtml(course.fit)}</p>
                  </div>
                  <div>
                    <strong>不适合谁</strong>
                    <p>${escapeHtml(course.avoid)}</p>
                  </div>
                  <div>
                    <strong>Assessment</strong>
                    <p>${escapeHtml(course.assessment)}</p>
                  </div>
                  ${course.syllabus ? `<div><strong>官方资料</strong><p>${syllabusLinks(course)}</p></div>` : ""}
                </div>
              </div>
            </div>
          </details>
        `
      )
      .join("");

    $$(".featured-course", container).forEach((details) => {
      details.addEventListener("toggle", () => {
        if (!details.open) return;
        $$(".featured-course", container).forEach((other) => {
          if (other !== details) other.open = false;
        });
      });
    });
  }

  const filterForm = $("[data-filter-form]");
  const courseGrid = $("[data-course-grid]");
  const resultsCount = $("[data-results-count]");
  const emptyState = $("[data-empty-state]");
  let applyingPreset = false;

  function getFilters() {
    const formData = new FormData(filterForm);
    return Object.fromEntries(formData.entries());
  }

  function courseMatches(course, filters) {
    const searchable = [
      course.title,
      course.provider,
      course.language,
      course.takenBy,
      course.teacher,
      course.experience,
      course.fit,
      course.avoid,
      course.assessment,
      ...(course.tags || [])
    ]
      .join(" ")
      .toLocaleLowerCase();

    const queryMatches = !filters.query || searchable.includes(filters.query.trim().toLocaleLowerCase());
    const ownerMatches = filters.takenBy === "all" || course.takenBy === filters.takenBy;
    const providerMatches = filters.provider === "all" || course.provider === filters.provider;
    const languageMatches = filters.language === "all" || course.language === filters.language;

    let workloadMatches = true;
    if (filters.workload === "1-2") workloadMatches = course.workload <= 2;
    if (filters.workload === "3") workloadMatches = course.workload === 3;
    if (filters.workload === "4-5") workloadMatches = course.workload >= 4;

    let groupMatches = true;
    if (filters.groupWork === "none") groupMatches = course.groupWork === "none";
    if (filters.groupWork === "any") groupMatches = course.groupWork !== "none";
    if (filters.groupWork === "some") groupMatches = course.groupWork === "some";
    if (filters.groupWork === "heavy") groupMatches = course.groupWork === "heavy";

    return queryMatches && ownerMatches && providerMatches && languageMatches && workloadMatches && groupMatches;
  }

  function courseCard(course) {
    const source = course.source
      ? `<dt>补充资料</dt><dd><a class="text-link" href="${escapeHtml(course.source)}" target="_blank" rel="noreferrer">查看课程产出</a></dd>`
      : "";
    const syllabus = course.syllabus
      ? `<dt>官方 Syllabus</dt><dd>${syllabusLinks(course)}</dd>`
      : "";

    return `
      <article class="course-card" data-course-id="${escapeHtml(course.id)}" data-expanded="false">
        <div class="course-head">
          <div>
            <h3 class="course-title">${escapeHtml(course.title)}</h3>
            <div class="course-meta">
              <span class="meta-chip">${escapeHtml(course.takenBy)}</span>
              <span class="meta-chip">${escapeHtml(course.provider)}</span>
              <span class="meta-chip">${escapeHtml(languageLabel[course.language] || course.language)}</span>
              <span class="meta-chip">小组：${escapeHtml(course.groupLabel)}</span>
            </div>
          </div>
          <span class="workload" aria-label="课程负担 ${course.workload}，满分 5">负担 ${course.workload}</span>
        </div>
        <p class="course-take">${escapeHtml(course.experience)}</p>
        <button class="course-toggle" type="button" aria-expanded="false" aria-controls="detail-${escapeHtml(course.id)}">查看完整体验</button>
        <div class="course-details" id="detail-${escapeHtml(course.id)}" aria-hidden="true" inert>
          <div>
            <div class="course-detail-inner">
              <dl>
                <dt>学分</dt><dd>${course.credits}</dd>
                <dt>修读学期</dt><dd>${escapeHtml(termLabel(course.term))}</dd>
                <dt>授课老师</dt><dd>${escapeHtml(course.teacher)}</dd>
                <dt>适合谁</dt><dd>${fieldText(course.fit)}</dd>
                <dt>不适合谁</dt><dd>${fieldText(course.avoid)}</dd>
                <dt>Assessment</dt><dd>${fieldText(course.assessment)}</dd>
                ${syllabus}
                ${source}
                ${course.notes ? `<dt>原表 Notes</dt><dd>${escapeHtml(course.notes)}</dd>` : ""}
              </dl>
            </div>
          </div>
        </div>
      </article>
    `;
  }

  function renderCourses() {
    const filters = getFilters();
    const filtered = data.courses.filter((course) => courseMatches(course, filters));
    courseGrid.innerHTML = filtered.map(courseCard).join("");
    resultsCount.textContent = `找到 ${filtered.length} 门课程，共 ${data.courses.length} 门`;
    emptyState.hidden = filtered.length !== 0;

    $$(".course-toggle", courseGrid).forEach((button) => {
      button.addEventListener("click", () => {
        const card = button.closest(".course-card");
        const expanded = card.dataset.expanded === "true";
        card.dataset.expanded = String(!expanded);
        button.setAttribute("aria-expanded", String(!expanded));
        button.textContent = expanded ? "查看完整体验" : "收起体验";
        $(".course-details", card).setAttribute("aria-hidden", String(expanded));
        $(".course-details", card).inert = expanded;
      });
    });
  }

  function resetPresetButtons() {
    $$("[data-filter-preset]").forEach((button) => button.setAttribute("aria-pressed", "false"));
  }

  function applyPreset(name, trigger) {
    applyingPreset = true;
    filterForm.reset();
    applyingPreset = false;
    const query = $("[name='query']", filterForm);
    const provider = $("[name='provider']", filterForm);
    const language = $("[name='language']", filterForm);
    const workload = $("[name='workload']", filterForm);
    const groupWork = $("[name='groupWork']", filterForm);

    if (name === "lighter") workload.value = "1-2";
    if (name === "group") groupWork.value = "any";
    if (name === "japanese") {
      provider.value = "CJL";
      language.value = "Japanese";
    }
    if (name === "business") query.value = "business";
    if (name === "heavy") workload.value = "4-5";

    resetPresetButtons();
    trigger?.setAttribute("aria-pressed", "true");
    renderCourses();
    query.focus({ preventScroll: true });
    $("#courses").scrollIntoView({ behavior: scrollBehavior(), block: "start" });
  }

  filterForm.addEventListener("input", () => {
    resetPresetButtons();
    renderCourses();
  });

  filterForm.addEventListener("reset", () => {
    if (applyingPreset) return;
    window.requestAnimationFrame(() => {
      resetPresetButtons();
      renderCourses();
    });
  });

  $$("[data-filter-preset]").forEach((button) => {
    button.addEventListener("click", () => applyPreset(button.dataset.filterPreset, button));
  });

  $("[data-assessment-search]").addEventListener("click", () => {
    applyPreset("assessment");
    $("[name='query']", filterForm).placeholder = "试试 presentation、essay、exam 或 paper";
  });

  $("[data-reset-empty]").addEventListener("click", () => {
    filterForm.reset();
    window.requestAnimationFrame(() => {
      renderCourses();
      $("[name='query']", filterForm).focus({ preventScroll: true });
    });
  });

  $("[data-density-toggle]").addEventListener("click", (event) => {
    const compact = courseGrid.classList.toggle("compact");
    event.currentTarget.setAttribute("aria-pressed", String(compact));
    event.currentTarget.textContent = compact ? "切换完整视图" : "切换紧凑视图";
  });

  $$("[data-course-jump]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.courseJump;
      const target = $(`[data-featured-id="${id}"]`);
      if (!target) return;
      target.open = true;
      target.querySelector("summary")?.focus({ preventScroll: true });
      target.scrollIntoView({ behavior: scrollBehavior(), block: "start" });
    });
  });

  function timelineState(item, now) {
    const start = new Date(item.start);
    const end = new Date(item.end);
    if (now < start) return "future";
    if (now > end) return "past";
    return "current";
  }

  function currentRegistrationAction(now) {
    const current = data.registration.find((item) => timelineState(item, now) === "current");
    if (current) {
      return {
        status: "正在进行",
        state: "current",
        date: current.dateLabel.replace("\n", " "),
        title: current.title,
        copy: current.action
      };
    }

    const next = data.registration.find((item) => timelineState(item, now) === "future");
    if (next) {
      const isBeforeFirst = next.id === data.registration[0].id;
      return {
        status: isBeforeFirst ? "准备中" : "下一步",
        state: "upcoming",
        date: next.dateLabel.replace("\n", " "),
        title: isBeforeFirst ? "先做一份“想选 + 备选”清单" : next.title,
        copy: isBeforeFirst
          ? "先查课程说明和时间冲突，再用两位学长的真实体验判断课程负担。不要等注册窗口打开才开始找课。"
          : next.action
      };
    }

    return {
      status: "已完成",
      state: "completed",
      date: "2026 秋季注册阶段已结束",
      title: "确认课表，开始管理每周节奏",
      copy: "把课程 deadline 放进日历，并在学期初再次核对课程说明和课堂通知。"
    };
  }

  function renderTimeline() {
    const now = new Date();
    const action = currentRegistrationAction(now);
    const list = $("[data-timeline-list]");

    list.innerHTML = data.registration
      .map((item) => {
        const state = timelineState(item, now);
        return `
          <li class="timeline-item" data-state="${state}">
            <time class="timeline-date">${escapeHtml(item.dateLabel)}</time>
            <div class="timeline-content">
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.action)}</p>
            </div>
          </li>
        `;
      })
      .join("");

    const bindings = [
      ["[data-action-status]", action.status],
      ["[data-action-date]", action.date],
      ["[data-action-title]", action.title],
      ["[data-action-copy]", action.copy],
      ["[data-timeline-status]", action.status],
      ["[data-timeline-title]", action.title],
      ["[data-timeline-copy]", action.copy]
    ];

    bindings.forEach(([selector, value]) => {
      const element = $(selector);
      if (element) element.textContent = value;
    });

    [$("[data-action-status]"), $("[data-timeline-status]")].forEach((chip) => {
      chip?.setAttribute("data-state", action.state);
    });
  }

  function renderResources() {
    const container = $("[data-resource-list]");
    container.innerHTML = data.resources
      .map(
        (resource) => `
          <article class="resource-card">
            <span class="resource-type">${escapeHtml(resource.type)}</span>
            <strong class="resource-name">${escapeHtml(resource.name)}</strong>
            <p class="resource-copy">${escapeHtml(resource.copy)}</p>
            <a class="resource-link" href="${escapeHtml(resource.url)}" target="_blank" rel="noreferrer">
              打开
            </a>
          </article>
        `
      )
      .join("");
  }

  function setupNavigation() {
    const menuButton = $(".menu-toggle");
    const nav = $("#site-nav");
    const navLinks = $$("a", nav);

    menuButton.addEventListener("click", () => {
      const open = nav.dataset.open === "true";
      nav.dataset.open = String(!open);
      menuButton.setAttribute("aria-expanded", String(!open));
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        nav.dataset.open = "false";
        menuButton.setAttribute("aria-expanded", "false");
      });
    });

    nav.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      nav.dataset.open = "false";
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.focus();
    });

    const sections = $$("[data-chapter]");
    const routeLinks = $$(".voyage-nav a");
    const allLinks = [...navLinks, ...routeLinks];
    let frame = 0;
    let offsets = [];
    let dirty = true;
    const progressBars = $$(".voyage-progress");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

    function paintMotion() {
      const documentHeight = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const routeProgress = reducedMotionQuery.matches ? 1 : clamp(window.scrollY / documentHeight);
      document.documentElement.style.setProperty("--route-progress", routeProgress.toFixed(4));
      progressBars.forEach((bar) => bar.style.setProperty("--route-progress", routeProgress.toFixed(4)));

      const hero = $(".hero");
      if (hero && !reducedMotionQuery.matches && window.innerWidth > 820) {
        const heroExit = clamp(-hero.getBoundingClientRect().bottom / Math.max(hero.offsetHeight * 0.72, 1));
        hero.style.setProperty("--hero-shift", `${(heroExit * 20).toFixed(2)}px`);
      } else if (hero) {
        hero.style.setProperty("--hero-shift", "0px");
      }
    }

    function paintRoute() {
      frame = 0;
      paintMotion();
      if (dirty) {
        offsets = sections.map(section => section.getBoundingClientRect().top + window.scrollY);
        dirty = false;
      }
      const position = window.scrollY + Math.min(window.innerHeight * 0.3, 200);
      let active = 0;
      offsets.forEach((top, index) => { if (position >= top) active = index; });
      allLinks.forEach(link => {
        if (link.hash === "#" + sections[active].id) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }
    function schedule(measure = false) {
      if (measure) dirty = true;
      if (!frame) frame = requestAnimationFrame(paintRoute);
    }
    window.addEventListener("scroll", () => schedule(), { passive: true });
    window.addEventListener("resize", () => schedule(true), { passive: true });
    reducedMotionQuery.addEventListener?.("change", () => schedule(true));
    // Re-measure after filtering, long reviews or details alter chapter positions.
    if ("ResizeObserver" in window) {
      const resize = new ResizeObserver(() => schedule(true));
      resize.observe($("main"));
      resize.observe($("[data-header]"));
      sections.forEach(section => resize.observe(section));
    } else {
      document.addEventListener("toggle", () => schedule(true), true);
      filterForm.addEventListener("input", () => schedule(true));
      document.addEventListener("click", () => schedule(true));
    }
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("chapter-seen");
          observer.unobserve(entry.target);
        });
      }, { threshold: 0, rootMargin: "0px 0px -12% 0px" });
      $$(".chapter-marker").forEach(marker => observer.observe(marker));
    }
    schedule(true);
  }

  renderFeatured();
  renderCourses();
  renderTimeline();
  renderResources();
  setupNavigation();
})();
