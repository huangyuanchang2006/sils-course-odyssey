(function () {
  "use strict";

  const copy = {
    zh: {
      meta: {
        title: "Chart Your Own Odyssey｜SILS 2026 选课工作台",
        description: "面向 2026 年 9 月 SILS 新生的选课经验、注册节点与工具工作台。"
      },
      accessibility: {
        skipLink: "跳到主要内容",
        home: "返回首页",
        mainNav: "主要导航",
        voyageNav: "Odyssey 章节航线"
      },
      brand: "SILS 选课工作台",
      menu: "菜单",
      languageToggle: {
        targetEnglish: "切换为英文",
        targetChinese: "切换为中文",
        english: "English",
        chinese: "中文"
      },
      nav: {
        principles: "三条原则",
        requirements: "毕业要求",
        picks: "重点课程",
        courses: "全部课程",
        beforeRegister: "注册前检查",
        registration: "注册节点",
        resources: "工具"
      },
      voyage: {
        home: "出发",
        principles: "三条原则",
        requirements: "毕业要求",
        picks: "重点课程",
        courses: "全部课程",
        beforeRegister: "注册前检查",
        registration: "注册节点",
        resources: "工具"
      },
      hero: {
        context: "SILS 2026 秋季新生选课工作台",
        title: "Welcome to SILS. Your Odyssey Starts Here.",
        audienceAria: "适合人群",
        tags: ["2026 年 9 月入学", "英语授课友好", "日语仍在学习中"],
        primaryAction: "开始浏览",
        secondaryAction: "查看全部课程",
        actionHeading: "现在最该做什么",
        actionLink: "查看注册动作"
      },
      presenters: {
        context: "分享者",
        title: "不同学期阶段，不同课程视角",
        chambersName: "Chambers 黄元畅",
        chambersAlt: "Chambers 的照片",
        chambersRole: "SILS 四月入学一年生",
        chambersFocus: "商业、经济课程，小组合作与选课工具",
        richardName: "Richard 赖子睿",
        richardAlt: "Richard 赖子睿的照片",
        richardRole: "SILS 九月入学二年生",
        richardFocus: "人文历史方向，跨学科课程体验"
      },
      chapters: {
        northStars: "<span aria-hidden=\"true\">✦</span> North Stars<span class=\"chapter-caption\">先建立判断，再开始搜课</span>",
        navigation: "<span aria-hidden=\"true\">✦</span> Navigation Chart<span class=\"chapter-caption\">SP2 官方要求摘要</span>",
        captains: "<span aria-hidden=\"true\">✦</span> Captain’s Logs<span class=\"chapter-caption\">五门重点课程</span>",
        explore: "<span aria-hidden=\"true\">✦</span> Explore the Ports<span class=\"chapter-caption\">课程浏览</span>",
        predeparture: "<span aria-hidden=\"true\">✦</span> Pre-departure Check",
        route: "<span aria-hidden=\"true\">✦</span> The Route<span class=\"chapter-caption\">2026 秋季，日本时间</span>",
        toolkit: "<span aria-hidden=\"true\">✦</span> Ship’s Toolkit<span class=\"chapter-caption\">工具入口</span>"
      },
      principles: {
        title: "我们最想提前告诉你的三件事",
        artAria: "三条原则的三联插画",
        choiceAria: "学生在多条课程路径前选择自己感兴趣的方向",
        japaneseAria: "学生沿着由日语学习笔记组成的阶梯向上学习",
        outsideAria: "三位学生在课堂之外交流并建立联系",
        firstTitle: "第一学期，兴趣是很好的决策起点。",
        firstCopy: "选择真正感兴趣的内容，而不只是自己觉得“应该”学的课程。你还在适应新的城市、语言和学习方式，给自己一点余量，会让后面的投入更持续。",
        firstAction: "看一门“高投入但值得”的课",
        secondTitle: "越早开始，复利周期越长。",
        secondCopy: "日语会持续扩大你的课程、社交、实习和生活半径。重点不是冲等级，而是尽早建立稳定节奏。",
        secondAction: "查看我们的日语课",
        thirdTitle: "别把大学只过成一张课表。",
        outsideListAria: "课外学习入口",
        outside: ["ICC 社交活动", "社团", "实习 / 打工"]
      },
      requirements: {
        stampAria: "毕业总学分 124",
        stampLabel: "毕业总学分",
        title: "先守住毕业结构，再谈自由探索",
        creditAria: "SP2 毕业学分构成",
        credits: ["语言", "统计", "数据科学", "研讨课", "讲授课", "选修课"],
        notes: [
          "Introductory Courses 至少覆盖 3 个 clusters。",
          "2025 年及以后入学者必须修读 Introductory Data Science。",
          "第一、第二学期标准注册上限为每学期 21 学分。"
        ],
        link: "查看 SILS 官方 Curriculum",
        finePrint: "此处按 SP2 摘要呈现。SP1 学生和特殊情况请以个人 Guidebook 与 SILS Office 说明为准。"
      },
      picks: {
        title: "红黑榜？不如聊聊 trade-offs",
        copy: "现场只深讲这五门。点击课程即可展开真实课程负担、考核方式和适合人群。"
      },
      explorer: {
        title: "按你的需求，找一门更合适的课",
        copy: "以下保留不同分享者的修课原话。同一门课可能有多个人的评价，点击课程里的 reviewer tab 可以切换查看。评价来自特定学期，老师、考核和课堂安排可能变化，请核对当学期 Syllabus。小组标记沿用原表：N 没有、Y 有、YYY 很多；混合标记请分课程看。",
        reviewerLegend: "<strong>Cindy 的新评价</strong> 已放进对应课程；看到橙色星标 tab，点一下就能切换查看。",
        reviewer: {
          label: "切换评价",
          hint: "点击名字比较不同人的体验",
          cindyHint: "Cindy 新增评价 · 点击查看",
          single: "本条评价来自",
          aria: "评价者切换",
          new: "新"
        },
        shortcutsAria: "常见问题快捷筛选",
        shortcuts: ["想先轻松一点", "想做小组项目", "想认真学日语", "想看商业经济", "先看看高强度课"],
        filters: {
          search: "搜索课程",
          searchPlaceholder: "输入课程名、主题或体验关键词",
          assessmentPlaceholder: "试试 presentation、essay、exam 或 paper",
          takenBy: "评价者",
          provider: "开课单位",
          language: "语言",
          english: "英语",
          japanese: "日语",
          workload: "课程负担",
          workload12: "1 至 2",
          workload3: "3",
          workload45: "4 至 5",
          groupWork: "小组合作",
          groupNone: "没有",
          groupAny: "有或很多",
          groupSome: "有",
          groupHeavy: "很多",
          all: "全部",
          reset: "清除筛选"
        },
        results: "找到 {filtered} 门课程，共 {total} 门",
        density: { full: "切换紧凑视图", compact: "切换完整视图" },
        empty: { title: "没有匹配的课程", copy: "试试放宽课程负担范围，或清除一项筛选。" }
      },
      courseDetails: { expand: "查看完整体验", collapse: "收起体验" },
      predeparture: {
        title: "Before You Register",
        copy: "选课之前，给自己留 45 秒。不是再看一次课程介绍，而是看看这个组合适不适合你。",
        summary: "展开四项注册前检查",
        summaryHint: "负担 / 考核 / 日语 / 合作",
        checks: {
          workload: { question: "这学期的组合是否过重？", copy: "把高负担课程放在一起看：最忙的一周，还剩多少时间给日语和课外生活？", action: "对照高负担课程" },
          assessment: { question: "考试、论文和 presentation 是否适合你？", copy: "看详情里的 Assessment，再用当学期 Syllabus 核对比例和 deadline。", action: "搜索考核关键词" },
          japanese: { question: "语言要求是否与实际水平匹配？", copy: "等级之外，也看看阅读、作业和课堂讨论的要求；学长体验不是分班建议。", action: "对照日语课体验" },
          teacher: { question: "老师风格和小组合作是否符合预期？", copy: "对照 Group Work、适合谁与不适合谁；不要只看一句结论。", action: "对照小组课程" }
        },
        tools: "再交叉查一遍：<a href=\"https://wasedatime.com/courses/syllabus\" target=\"_blank\" rel=\"noreferrer\">WasedaTime</a> · <a href=\"https://www.wasedule.com/downloads\" target=\"_blank\" rel=\"noreferrer\">わせジュール</a>。第三方评价仅供参考，最终回到官方 Syllabus。"
      },
      registration: {
        title: "不要背日期，只记住下一步动作",
        copy: "时间轴从第一次注册开始。临近操作时，仍请查看学校最新通知。",
        currentLabel: "当前动作",
        alerts: {
          maintenance: "<strong>系统维护：</strong>每日日本时间 2:00 至 7:00 无法使用 Web Course Registration。",
          deadline: "<strong>不要压线：</strong>学校通常不接受逾期注册。系统异常时应在截止前联系 SILS Office 并保留截图。",
          drop: "<strong>退选限制：</strong>部分付费课程、Academic Writing 和特定开放课程可能不可退选，操作前先看官方说明。"
        }
      },
      resources: {
        title: "每个工具只解决一个清楚的问题",
        copy: "第三方工具适合搜索和整理，最终选课、学分和规则仍以早稻田官方系统为准。",
        open: "打开"
      },
      faq: {
        context: "现场 Q&A",
        title: "可能会被问到的问题",
        items: [
          { question: "第一学期选多少学分比较合适？", answer: "先看毕业结构和 21 学分上限，再根据阅读、语言课和小组项目的组合判断。不要只看总学分，要看最忙的一周会同时发生什么。" },
          { question: "SGU 学生要不要优先学日语？", answer: "建议尽早建立稳定节奏。日语不只影响课程，还影响社交、生活和实习选择。难度不必一步到顶，持续比短期冲刺重要。" },
          { question: "怎么理解你们说的“高性价比”？", answer: "它不是单纯“容易拿分”。我们更看重投入是否换来清楚的知识、作品、表达训练或新的兴趣方向，以及这门课是否适合你。" },
          { question: "个人课程评价有多可靠？", answer: "它适合帮助你提出问题，不适合替代课程说明。老师、考核和个人基础都会改变体验，所以卡片会同时写适合谁与不适合谁。" }
        ]
      },
      footer: {
        brand: "SILS 选课工作台",
        byline: "由 Chambers、Richard 与 Cindy 的个人修课经验整理。",
        disclaimer: "课程与评价可能随学期和教师变化。最终请以 MyWaseda、官方课程说明和 SILS 最新通知为准。<br />最后更新：2026-09-16"
      },
      labels: {
        credits: "学分",
        term: "修读学期",
        teacher: "授课老师",
        fit: "适合谁",
        avoid: "不适合谁",
        assessment: "Assessment",
        officialInfo: "官方资料",
        syllabus: "官方 Syllabus",
        source: "补充资料",
        sourceLink: "查看课程产出",
        notes: "原表 Notes",
        workload: "课程负担",
        group: "小组",
        groupWork: "Group Work",
        log: "LOG",
        attributionSuffix: "的修课原话",
        notProvided: "原表暂未填写",
        teacherMissing: "教师待补充",
        language: { English: "英语", Japanese: "日语" }
      },
      timeline: {
        current: "正在进行",
        preparing: "准备中",
        next: "下一步",
        completed: "已完成",
        beforeFirstTitle: "先做一份“想选 + 备选”清单",
        beforeFirstCopy: "先查课程说明和时间冲突，再用分享者的真实体验判断课程负担。不要等注册窗口打开才开始找课。",
        completedDate: "2026 秋季注册阶段已结束",
        completedTitle: "确认课表，开始管理每周节奏",
        completedCopy: "把课程 deadline 放进日历，并在学期初再次核对课程说明和课堂通知。"
      }
    },
    en: {
      meta: {
        title: "Chart Your Own Odyssey | SILS Course Guide 2026",
        description: "An easygoing, student-made course guide for September 2026 Waseda SILS SGU students."
      },
      accessibility: {
        skipLink: "Skip to main content",
        home: "Back to home",
        mainNav: "Main navigation",
        voyageNav: "Odyssey section navigation"
      },
      brand: "SILS Course Odyssey",
      menu: "Menu",
      languageToggle: {
        targetEnglish: "Switch to English",
        targetChinese: "切换为中文",
        english: "English",
        chinese: "中文"
      },
      nav: {
        principles: "Three principles",
        requirements: "Requirements",
        picks: "Featured courses",
        courses: "All courses",
        beforeRegister: "Before you register",
        registration: "Registration dates",
        resources: "Toolkit"
      },
      voyage: {
        home: "Departure",
        principles: "North stars",
        requirements: "Navigation chart",
        picks: "Captain's logs",
        courses: "Explore the ports",
        beforeRegister: "Pre-departure check",
        registration: "The route",
        resources: "Ship's toolkit"
      },
      hero: {
        context: "A course guide for September 2026 SILS SGU students",
        title: "Welcome to SILS. Your Odyssey Starts Here.",
        audienceAria: "This guide is for",
        tags: ["September 2026 entrants", "English-taught courses", "Still learning Japanese"],
        primaryAction: "Start exploring",
        secondaryAction: "Browse all courses",
        actionHeading: "What should you do next?",
        actionLink: "See the registration route"
      },
      presenters: {
        context: "The people behind the logs",
        title: "Two semester stages, two ways to see SILS courses",
        chambersName: "Chambers Huang Yuanchang",
        chambersAlt: "Portrait of Chambers",
        chambersRole: "SILS April-entry first-year student",
        chambersFocus: "Business, Economics, group work, and course-planning tools",
        richardName: "Richard Lai Zirui",
        richardAlt: "Portrait of Richard",
        richardRole: "SILS September-entry second-year student",
        richardFocus: "Humanities, history, and interdisciplinary courses"
      },
      chapters: {
        northStars: "<span aria-hidden=\"true\">✦</span> North Stars<span class=\"chapter-caption\">Build your decision criteria before you start browsing</span>",
        navigation: "<span aria-hidden=\"true\">✦</span> Navigation Chart<span class=\"chapter-caption\">Official SP2 summary</span>",
        captains: "<span aria-hidden=\"true\">✦</span> Captain’s Logs<span class=\"chapter-caption\">Five featured courses</span>",
        explore: "<span aria-hidden=\"true\">✦</span> Explore the Ports<span class=\"chapter-caption\">Course browser</span>",
        predeparture: "<span aria-hidden=\"true\">✦</span> Pre-departure Check",
        route: "<span aria-hidden=\"true\">✦</span> The Route<span class=\"chapter-caption\">Fall 2026 · Japan time</span>",
        toolkit: "<span aria-hidden=\"true\">✦</span> Ship’s Toolkit<span class=\"chapter-caption\">Useful links</span>"
      },
      principles: {
        title: "Three things we want you to know early",
        artAria: "A three-panel illustration of the three course-planning principles",
        choiceAria: "A student choosing an interesting direction among several course paths",
        japaneseAria: "A student climbing a staircase made from Japanese study notes",
        outsideAria: "Three students connecting outside the classroom",
        firstTitle: "In your first semester, interest is a good place to start.",
        firstCopy: "Choose something you are genuinely curious about, not only what you think you should take. You are also adjusting to a new city, language, and way of studying. Leaving yourself some room makes it easier to keep going.",
        firstAction: "See one high-workload class that may be worth it",
        secondTitle: "The earlier you start, the longer the payoff.",
        secondCopy: "Japanese keeps expanding your range of classes, social life, internships, and everyday options. The goal is not to rush through levels; it is to build a steady rhythm early.",
        secondAction: "Browse our Japanese courses",
        thirdTitle: "University should be more than a timetable.",
        outsideListAria: "Ways to learn outside class",
        outside: ["ICC events", "Student clubs", "Internships / part-time work"]
      },
      requirements: {
        stampAria: "124 credits required for graduation",
        stampLabel: "credits to graduate",
        title: "Keep your graduation requirements on track before you explore freely",
        creditAria: "SP2 graduation credit breakdown",
        credits: ["Language", "Statistics", "Data Science", "Seminars", "Lectures", "Electives"],
        notes: [
          "Introductory Courses must cover at least 3 clusters.",
          "Students entering in 2025 or later must take Introductory Data Science.",
          "The standard registration limit in semesters 1 and 2 is 21 credits per semester."
        ],
        link: "View the official SILS Curriculum",
        finePrint: "This is an SP2 summary. SP1 students and students with special circumstances should follow their own Guidebook and the SILS Office's instructions."
      },
      picks: {
        title: "Forget the red/black list—let's talk trade-offs.",
        copy: "We will go deeper on these five during the session. Open a course to see its real workload, assessment style, and who it suits."
      },
      explorer: {
        title: "Find a course that fits what you need",
        copy: "These are first-hand reports from the two contributors. Experiences vary by semester, instructor, assessment, and class format, so check the current Syllabus. Group-work labels follow the source sheet: N = none, Y = some, YYY = a lot; mixed labels are explained per course.",
        reviewerLegend: "<strong>Cindy's new reviews</strong> are tucked into their matching courses. Look for the orange star tab to switch.",
        reviewer: {
          label: "Switch review",
          hint: "Click a name to compare perspectives",
          cindyHint: "Cindy's new review · click to view",
          single: "Review by",
          aria: "Reviewer tabs",
          new: "NEW"
        },
        shortcutsAria: "Quick filters for common questions",
        shortcuts: ["I want something lighter", "I want a group project", "I want to study Japanese seriously", "Show me business and Economics", "Show me high-workload courses"],
        filters: {
          search: "Search courses",
          searchPlaceholder: "Try a course name, topic, or experience keyword",
          assessmentPlaceholder: "Try presentation, essay, exam, or paper",
          takenBy: "Reviewer",
          provider: "Provider",
          language: "Language",
          english: "English",
          japanese: "Japanese",
          workload: "Workload",
          workload12: "1 to 2",
          workload3: "3",
          workload45: "4 to 5",
          groupWork: "Group work",
          groupNone: "None",
          groupAny: "Some or a lot",
          groupSome: "Some",
          groupHeavy: "A lot",
          all: "All",
          reset: "Clear filters"
        },
        results: "Showing {filtered} of {total} courses",
        density: { full: "Switch to compact view", compact: "Switch to full view" },
        empty: { title: "No courses match", copy: "Try widening the workload range or clearing a filter." }
      },
      courseDetails: { expand: "View full report", collapse: "Hide report" },
      predeparture: {
        title: "Before You Register",
        copy: "Give yourself 45 seconds before registering. Do not just reread the course description—check whether this combination works for you.",
        summary: "Open the four pre-registration checks",
        summaryHint: "Workload / assessment / Japanese / teamwork",
        checks: {
          workload: { question: "Is this combination too heavy?", copy: "Look at your high-workload courses together. During your busiest week, how much time is left for Japanese and life outside class?", action: "Compare high-workload courses" },
          assessment: { question: "Do the exams, papers, and presentations suit you?", copy: "Read the Assessment section, then check the current Syllabus for percentages and deadlines.", action: "Search assessment keywords" },
          japanese: { question: "Does the language demand match your actual level?", copy: "Look beyond the placement level: check the reading, homework, and discussion demands too. Student experience is not placement advice.", action: "Compare Japanese courses" },
          teacher: { question: "Do the instructor's style and teamwork expectations fit?", copy: "Compare the Group Work label, who the course is for, and who may want to skip it. Do not rely on one verdict alone.", action: "Compare group-work courses" }
        },
        tools: "Cross-check with <a href=\"https://wasedatime.com/courses/syllabus\" target=\"_blank\" rel=\"noreferrer\">WasedaTime</a> and <a href=\"https://www.wasedule.com/downloads\" target=\"_blank\" rel=\"noreferrer\">Wasedule</a>. Third-party reviews are for reference; return to the official Syllabus for the final check."
      },
      registration: {
        title: "Do not memorize every date. Remember the next action.",
        copy: "This timeline starts with first registration. Check the university's latest notice when you are about to act.",
        currentLabel: "Current action",
        alerts: {
          maintenance: "<strong>System maintenance:</strong> Web Course Registration is unavailable every day from 2:00 to 7:00 AM Japan time.",
          deadline: "<strong>Do not wait until the deadline:</strong> late registration is normally not accepted. If the system fails, contact the SILS Office before the deadline and keep a screenshot.",
          drop: "<strong>Drop restrictions:</strong> some paid courses, Academic Writing, and certain open courses may not allow withdrawal. Check the official instructions first."
        }
      },
      resources: {
        title: "Each tool solves one clear problem",
        copy: "Third-party tools are useful for searching and organizing. Use Waseda's official systems as the final authority for course choices, credits, and rules.",
        open: "Open"
      },
      faq: {
        context: "Q&A",
        title: "Questions you may be asking",
        items: [
          { question: "How many credits should I take in my first semester?", answer: "Start with the graduation structure and the 21-credit limit. Then judge the combination of reading, language classes, and group projects. The total alone is not enough; look at what will happen during your busiest week." },
          { question: "Should SGU students prioritize Japanese?", answer: "It is worth building a steady rhythm early. Japanese affects more than your course options: it can change your social life, daily routines, and internship choices. You do not need to jump to the hardest level immediately; consistency matters more than a short sprint." },
          { question: "What do you mean when you call a class a good value?", answer: "It does not simply mean that a class is easy to get a good grade in. We care about whether the time you invest gives you clear knowledge, a useful output, practice expressing ideas, or a new direction—and whether the class fits you." },
          { question: "How reliable are personal course reviews?", answer: "They are useful for helping you ask better questions, not for replacing the official course description. Instructors, assessments, and your own background all change the experience, which is why each card includes both Best for and Maybe skip if." }
        ]
      },
      footer: {
        brand: "SILS Course Odyssey",
        byline: "Built from Chambers, Richard, and Cindy's first-hand course experiences.",
        disclaimer: "Courses and experiences may change with the semester and instructor. For final decisions, follow MyWaseda, the official course information, and the latest SILS notices.<br />Last updated: 2026-09-16"
      },
      labels: {
        credits: "credits",
        term: "Term",
        teacher: "Instructor",
        fit: "Best for",
        avoid: "Maybe skip if",
        assessment: "Assessment",
        officialInfo: "Official information",
        syllabus: "Official Syllabus",
        source: "Extra material",
        sourceLink: "View course output",
        notes: "Source-sheet notes",
        workload: "Workload",
        group: "Group work",
        groupWork: "Group Work",
        log: "LOG",
        attributionSuffix: "'s first-hand report",
        notProvided: "Not filled in in the source sheet",
        teacherMissing: "Instructor not listed",
        language: { English: "English", Japanese: "Japanese" }
      },
      timeline: {
        current: "In progress",
        preparing: "Preparing",
        next: "Next",
        completed: "Completed",
        beforeFirstTitle: "Make a shortlist and backups",
        beforeFirstCopy: "Check course descriptions and timetable conflicts, then use the student reports to judge the workload. Do not wait for registration to open.",
        completedDate: "Fall 2026 registration period has ended",
        completedTitle: "Confirm your timetable and manage your weekly rhythm",
        completedCopy: "Put course deadlines in your calendar and recheck the course information and class notices at the start of term."
      }
    }
  };

  function resolve(locale, path) {
    return path.split(".").reduce((value, key) => value?.[key], copy[locale]);
  }

  function applyStaticLocale(locale) {
    const selected = copy[locale] || copy.zh;
    document.documentElement.lang = locale === "en" ? "en" : "zh-CN";
    document.title = selected.meta.title;
    const description = document.querySelector("meta[name='description']");
    if (description) description.setAttribute("content", selected.meta.description);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = resolve(locale, element.dataset.i18n);
      if (value !== undefined) element.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const value = resolve(locale, element.dataset.i18nHtml);
      if (value !== undefined) element.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
      element.dataset.i18nAttr.split(",").forEach((entry) => {
        const [attribute, path] = entry.trim().split(":");
        const value = resolve(locale, path);
        if (attribute && value !== undefined) element.setAttribute(attribute, value);
      });
    });

    const toggle = document.querySelector("[data-language-toggle]");
    if (toggle) {
      const nextLocale = locale === "en" ? "zh" : "en";
      toggle.textContent = selected.languageToggle[nextLocale === "en" ? "english" : "chinese"];
      toggle.setAttribute("aria-label", selected.languageToggle[nextLocale === "en" ? "targetEnglish" : "targetChinese"]);
      toggle.setAttribute("aria-pressed", String(locale === "en"));
    }
  }

  window.SILS_COPY = copy;
  window.SILS_LOCALIZE_STATIC = applyStaticLocale;
})();
