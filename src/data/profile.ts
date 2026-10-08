import type { Locale } from '../lib/i18n';

export const profile = {
  name: '宋哲铭',
  nameEn: 'SONG ZHEMING',
  github: 'https://github.com/szm20060312',
  emails: ['zhemingsong0312@163.com', 'songzheming0312@gmail.com'],
  resumes: {
    en: '/resume/song-zheming-resume-en.pdf?v=20261008-2',
    zh: '/resume/song-zheming-resume-zh.pdf?v=20261008-2',
  },
  schoolUrl: 'https://www.must.edu.mo/index.html?locale=en_US',
  programUrl: 'https://fie.must.edu.mo/id-1439/program/view/id-211.html?locale=en_US',
  reviewed: '2026-10-07',
  internship: { start: '2026-07-01', end: '2026-07-30' },
};

export const bio = {
  en: {
    eyebrow: 'Computer science undergraduate',
    headline: 'Graphics, learning, and the systems we interact with.',
    introduction: 'I’m Song Zheming, a third-year Computer Science undergraduate at Macau University of Science and Technology. My interests are computer graphics, machine learning, and the application of AI and emerging technologies in games.',
    practice: 'Alongside my studies, I lead personal projects spanning desktop applications, interactive games, and LLM-powered tools. During my internship, I contributed to AI agents for carbon-management applications.',
    school: 'Macau University of Science and Technology',
    degree: 'B.Sc. · Computer Science',
    educationPeriod: '2024–2028 (expected)',
    educationStatus: 'Third-year undergraduate',
    teaching: 'Primarily taught in English',
    educationNote: 'Faculty of Innovation Engineering · School of Computer Science and Engineering',
    aboutIntro: 'I’m a Computer Science undergraduate interested in the connection between technical ideas and usable, interactive software. I work on personal projects across desktop and web applications, and continue to explore graphics, learning, and AI in games.',
    projectIntro: 'A selection of personally led software projects, course work, and learning practice. Each project connects an implementation with its purpose, scope, and source code.',
    researchIntro: 'These interests draw on undergraduate coursework, personal study, and software practice. Relevant projects and experience are linked where available.',
    schoolLink: 'University website', programLink: 'Degree programme',
    internshipTitle: 'Algorithm Engineer Intern',
    company: 'Beijing RocKontrol Intelligent Connected Technology Co. Ltd',
    department: 'Software Product Department',
    internshipPeriod: 'July 2026',
    internshipSummary: 'Contributed to an AI agent for carbon peaking and carbon neutrality, carbon trading, and carbon emissions. My work included conversational workflows, retrieval-augmented generation, and report generation.',
    internshipPoints: [
      'Participated in multi-scenario AI agent development and designed Dify workflows for decision-support applications.',
      'Iterated prompts, integrated knowledge retrieval, and improved contextual routing for follow-up questions.',
      'Evaluated Markdown-to-Word tools and developed HTML report workflows, including output formatting and chart presentation.',
      'Contributed to model adaptation, functional testing, regression examples, and technical documentation.',
    ],
    contactIntro: 'For academic exchange, project discussions, or collaboration, you can reach me by email.',
    aboutEducation: 'I entered the Bachelor of Science programme in 2024, majoring in Computer Science. I am currently in my third year and expect to graduate in 2028. The programme is primarily taught in English. My current coursework includes software engineering, operating systems, computer networks, and Computer Graphics.',
  },
  zh: {
    eyebrow: '计算机科学本科生',
    headline: '探索图形、学习与交互系统。',
    introduction: '我是宋哲铭，澳门科技大学计算机科学专业的大三本科生。我的兴趣包括计算机图形学、机器学习，以及人工智能等前沿技术在游戏中的应用。',
    practice: '在本科课程之外，我主导开发桌面应用、交互游戏与大模型应用工具。实习期间，我参与了面向碳管理相关场景的综合性智能体开发。',
    school: '澳门科技大学',
    degree: '理学学士 · 计算机科学',
    educationPeriod: '2024–2028（预计）',
    educationStatus: '大三本科在读',
    teaching: '本科主要以英文授课',
    educationNote: '创新工程学院 · 计算机科学与工程学院',
    aboutIntro: '我是一名计算机科学本科生，关注技术想法与可用交互软件之间的联系。我主导开发桌面与 Web 个人项目，并持续学习计算机图形学、机器学习及其在游戏中的应用。',
    projectIntro: '这里整理了我个人主导的软件项目、课程作品与学习实践。每个项目都介绍用途、实现思路、当前范围，并提供源码入口。',
    researchIntro: '这些兴趣来自本科课程、个人学习与软件实践。相关项目和经历在对应方向下列出。',
    schoolLink: '学校官网', programLink: '学位课程',
    internshipTitle: '算法工程师实习生',
    company: '北京佳华智联科技有限公司',
    department: '软件产品部',
    internshipPeriod: '2026 年 7 月',
    internshipSummary: '参与面向双碳、碳交易、碳排放等多场景的综合性智能体开发，具体工作涉及对话工作流、知识库检索与报告生成。',
    internshipPoints: [
      '参与多场景智能体开发，设计和迭代面向问策功能的 Dify 工作流。',
      '优化提示词、集成知识库检索，改进连续对话中的追问与分类路由。',
      '评估 Markdown 转 Word 工具，建设 HTML 报告输出流程，处理文档格式与图表呈现问题。',
      '参与模型适配、功能测试、回归样例与技术文档整理。',
    ],
    contactIntro: '欢迎通过邮箱交流学习、项目实践与合作想法。',
    aboutEducation: '2024 年进入澳门科技大学理学学士课程，主修计算机科学。目前大三在读，预计于 2028 年毕业。本科主要以英文授课。本学期在修课程包括软件工程、操作系统、计算机网络和计算机图形学。',
  },
} satisfies Record<Locale, object>;

export const interests = {
  en: [
    {
      id: 'graphics', title: 'Computer graphics', short: 'Coursework · In progress',
      description: 'I am currently taking Computer Graphics. My notes so far cover an introduction to graphics, linear algebra and vector calculus, rasterization and sampling, and spatial transformations, including homogeneous coordinates, perspective projection, and scene graphs.',
      related: [],
    },
    {
      id: 'learning', title: 'Machine learning', short: 'Learning-based methods',
      description: 'I want to explore learning-based methods and their applications in interactive systems. My current experience includes foundational study and practical LLM application development, such as knowledge retrieval and conversational workflows.',
      related: [{ title: 'AI application internship', path: 'about#experience' }],
    },
    {
      id: 'games', title: 'AI in games', short: 'Intelligent, interactive experiences',
      description: 'I’m interested in bringing AI and emerging technologies into games. My projects offer practical experience with rule-based strategy systems and API-driven puzzle generation.',
      related: [{ title: 'Jin · Xin', path: 'projects/jinxin' }, { title: 'AI emoji idiom game', path: 'projects/ai-emoji-idiom' }],
    },
  ],
  zh: [
    {
      id: 'graphics', title: '计算机图形学', short: '课程学习 · 正在修读',
      description: '我正在修读计算机图形学。目前笔记覆盖图形学导论、线性代数与向量微积分、光栅化与采样、空间变换，包括齐次坐标、透视投影和场景图等内容。',
      related: [],
    },
    {
      id: 'learning', title: '机器学习', short: '基于学习的方法',
      description: '希望探索机器学习方法及其在交互系统中的应用。目前的经历包括基础理论学习，以及知识库检索、对话工作流等大模型应用开发实践。',
      related: [{ title: 'AI 应用开发实习', path: 'about#experience' }],
    },
    {
      id: 'games', title: '游戏中的人工智能', short: '智能化的交互体验',
      description: '希望探索人工智能等前沿技术与游戏的结合。已有项目提供了策略规则建模，以及通过模型 API 生成游戏谜题的实践经验。',
      related: [{ title: '晋·信', path: 'projects/jinxin' }, { title: 'AI 表情猜成语', path: 'projects/ai-emoji-idiom' }],
    },
  ],
} satisfies Record<Locale, object>;
