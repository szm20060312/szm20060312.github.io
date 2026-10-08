export const locales = ['en', 'zh'] as const;
export type Locale = (typeof locales)[number];

export function pathFor(locale: Locale, path = ''): string {
  const [pathname, fragment] = path.split('#');
  const part = pathname.replace(/^\/+|\/+$/g, '');
  return `${locale === 'zh' ? '/zh/' : '/'}${part ? `${part}/` : ''}${fragment ? `#${fragment}` : ''}`;
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'en' ? 'zh' : 'en';
}

export const ui = {
  en: {
    home: 'Home', interests: 'Interests', projects: 'Projects', writing: 'Writing', about: 'About',
    skip: 'Skip to content', switchLanguage: '中文', switchLabel: 'Read this page in Chinese',
    selected: 'Selected projects', allProjects: 'All projects', experience: 'Experience',
    researchInterests: 'Research interests', education: 'Education',
    project: 'Project details', code: 'Source code', demo: 'Demo', report: 'Report', email: 'Email',
    personallyLed: 'Personally led', projectNotes: 'Project notes',
    backProjects: 'Back to all projects', backWriting: 'Back to all writing',
    related: 'Related work', contact: 'Contact', technologies: 'Technologies',
    personal: 'Personal projects', course: 'Course projects', learning: 'Learning & practice',
    sources: 'Project resources', moreAbout: 'More about me', selectedWriting: 'Selected writing',
    footer: 'Computer science · Graphics, learning & interactive systems',
    copyright: 'Song Zheming', localeName: 'English',
  },
  zh: {
    home: '主页', interests: '研究兴趣', projects: '项目', writing: '文章', about: '关于',
    skip: '跳转到正文', switchLanguage: 'English', switchLabel: '阅读此页面的英文版本',
    selected: '精选项目', allProjects: '全部项目', experience: '实习经历',
    researchInterests: '研究兴趣', education: '教育背景',
    project: '项目详情', code: '源码', demo: '演示', report: '报告', email: '邮箱',
    personallyLed: '个人主导', projectNotes: '项目说明',
    backProjects: '返回全部项目', backWriting: '返回文章列表',
    related: '相关实践', contact: '联系', technologies: '技术栈',
    personal: '个人项目', course: '课程项目', learning: '学习与实践',
    sources: '项目资源', moreAbout: '更多个人信息', selectedWriting: '精选文章',
    footer: '计算机科学 · 图形学、机器学习与交互系统',
    copyright: '宋哲铭', localeName: '中文',
  },
} as const;
