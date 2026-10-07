import type { Locale } from '../lib/i18n';

export interface Course {
  code: string;
  title: Record<Locale, string>;
}

export interface CourseSemester {
  id: string;
  title: Record<Locale, string>;
  current: boolean;
  courses: Course[];
}

// Only the public course columns are transcribed here. Source records stay outside this project.
export const coursework: CourseSemester[] = [
  {
    id: '2609', title: { en: 'Autumn 2026', zh: '2026 年秋季' }, current: true,
    courses: [
      { code: 'CS250', title: { en: 'Software Engineering', zh: '软件工程' } },
      { code: 'CS340', title: { en: 'Operating Systems', zh: '操作系统' } },
      { code: 'CS341', title: { en: 'Operating Systems Laboratory', zh: '操作系统实验' } },
      { code: 'CS370', title: { en: 'Computer Networks I', zh: '计算机网络 I' } },
      { code: 'CS371', title: { en: 'Computer Networks Laboratory I', zh: '计算机网络实验 I' } },
      { code: 'CS440', title: { en: 'Computer Graphics', zh: '计算机图形学' } },
    ],
  },
  {
    id: '2602', title: { en: 'Spring 2026', zh: '2026 年春季' }, current: false,
    courses: [
      { code: 'CS112', title: { en: 'Web Technologies', zh: 'Web 技术' } },
      { code: 'CS220', title: { en: 'Design and Analysis of Algorithms', zh: '算法设计与分析' } },
      { code: 'CS230', title: { en: 'Computer Organization', zh: '计算机组成原理' } },
      { code: 'CS231', title: { en: 'Computer Organization Laboratory', zh: '计算机组成原理实验' } },
      { code: 'CS240', title: { en: 'Database Systems', zh: '数据库系统' } },
      { code: 'GSDS001', title: { en: 'Speaking and Debating Skills', zh: '演讲与辩论技巧' } },
      { code: 'MATH104', title: { en: 'Probability and Statistics', zh: '概率与统计' } },
      { code: 'PES-22', title: { en: 'Physical Education and Sports — Shaolin Kung Fu for Health', zh: '体育与竞技 — 少林养身功' } },
    ],
  },
  {
    id: '2509', title: { en: 'Autumn 2025', zh: '2025 年秋季' }, current: false,
    courses: [
      { code: 'CS121', title: { en: 'Data Structures', zh: '数据结构' } },
      { code: 'CS130', title: { en: 'Digital Logic', zh: '数字逻辑' } },
      { code: 'CS190', title: { en: 'Professional Ethics and Communication Skills', zh: '专业道德与沟通技巧' } },
      { code: 'GSA-01', title: { en: 'Special Topic in Humanities and Arts', zh: '人文艺术专题' } },
      { code: 'GSH-31', title: { en: 'Special Topic in Social Science — Contemporary China Lecture Series', zh: '社会科学专题 — 当代中国系列讲座' } },
      { code: 'GSS001', title: { en: 'Astronomy', zh: '天文科学' } },
      { code: 'MATH103', title: { en: 'Calculus III', zh: '微积分 III' } },
      { code: 'PHYS100', title: { en: 'Physics', zh: '物理' } },
    ],
  },
  {
    id: '2502', title: { en: 'Spring 2025', zh: '2025 年春季' }, current: false,
    courses: [
      { code: 'CS111', title: { en: 'Object-Oriented Programming', zh: '面向对象程序设计' } },
      { code: 'CS120', title: { en: 'Discrete Mathematics', zh: '离散数学' } },
      { code: 'ENG003', title: { en: 'English III', zh: '英文 III' } },
      { code: 'ENG004', title: { en: 'English IV', zh: '英文 IV' } },
      { code: 'GCWC001', title: { en: 'General Study of Chinese & Western Cultures', zh: '中西文化通论' } },
      { code: 'MATH102', title: { en: 'Calculus II', zh: '微积分 II' } },
    ],
  },
  {
    id: '2409', title: { en: 'Autumn 2024', zh: '2024 年秋季' }, current: false,
    courses: [
      { code: 'CHNRW001', title: { en: 'Chinese Reading and Writing', zh: '中文阅读与写作' } },
      { code: 'CS110', title: { en: 'Computer Programming', zh: '计算机程序设计' } },
      { code: 'ENG001', title: { en: 'English I', zh: '英文 I' } },
      { code: 'ENG002', title: { en: 'English II', zh: '英文 II' } },
      { code: 'GCLBL001', title: { en: 'Introduction to Constitutional Law and Basic Law', zh: '宪法与基本法概论' } },
      { code: 'GMS001', title: { en: 'Masters Series of Science and Technology', zh: '科技大师讲座' } },
      { code: 'GUL001', title: { en: 'University Life', zh: '大学生活' } },
      { code: 'MATH100', title: { en: 'Linear Algebra', zh: '线性代数' } },
      { code: 'MATH101', title: { en: 'Calculus I', zh: '微积分 I' } },
    ],
  },
];

export function assertPublicCoursework(semesters: readonly CourseSemester[]): void {
  const checkFields = (value: object, allowed: string[]) => {
    if (Object.keys(value).some((key) => !allowed.includes(key))) {
      throw new Error('Unexpected field in public coursework data');
    }
  };
  const checkTitle = (title: Record<Locale, string>) => {
    checkFields(title, ['en', 'zh']);
    if (!title.en?.trim() || !title.zh?.trim()) throw new Error('Coursework needs both language titles');
  };
  const identifiers = new Set<string>();
  for (const semester of semesters) {
    checkFields(semester, ['id', 'title', 'current', 'courses']);
    checkTitle(semester.title);
    for (const course of semester.courses) {
      checkFields(course, ['code', 'title']);
      checkTitle(course.title);
      const identifier = `${semester.id}/${course.code}`;
      if (identifiers.has(identifier)) throw new Error('Duplicate coursework record');
      identifiers.add(identifier);
    }
  }
}

assertPublicCoursework(coursework);

export const foundationGroups = [
  { title: { en: 'Programming & algorithms', zh: '编程与算法' }, codes: ['CS110', 'CS111', 'CS120', 'CS121', 'CS220'] },
  { title: { en: 'Mathematical foundations', zh: '数学基础' }, codes: ['MATH100', 'MATH101', 'MATH102', 'MATH103', 'MATH104'] },
  { title: { en: 'Computer systems & data', zh: '计算机系统与数据' }, codes: ['CS130', 'CS230', 'CS231', 'CS240', 'CS112'] },
] as const;
