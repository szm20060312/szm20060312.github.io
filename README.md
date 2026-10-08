# 宋哲铭 · 个人学术主页

基于 Astro、TypeScript 和原生 CSS 的个人学术主页，使用 GitHub Pages 发布。英文为默认语言，中文位于 `/zh/`。

视觉设计采用白底与蓝灰文字，英文标题使用本站提供的 Crimson Pro，中文标题和正文使用系统字体回退。字体资源位于 `public/fonts/`，授权见 `CrimsonPro-OFL.txt`。页面包含响应式布局、键盘焦点、较大的操作区域及打印样式。

- 英文主页：[szm20060312.github.io](https://szm20060312.github.io/)
- 中文主页：[szm20060312.github.io/zh/](https://szm20060312.github.io/zh/)

## 本地运行

使用 Node.js 24 或更新版本：

```sh
npm ci
npm run dev
```

打开 `http://127.0.0.1:4321/`，中文主页为 `http://127.0.0.1:4321/zh/`。

Astro 7 的开发服务可在后台运行。查看和停止服务：

```sh
npm exec astro -- dev status
npm exec astro -- dev stop
```

## 检查与构建

```sh
npm test
npm run build
npm run preview -- --port 4322
```

- `npm test`：验证草稿隔离、译文完整性、重复路径、双语链接与课程公开字段。
- `npm run build`：类型检查、静态生成，以及构建产物的链接、语言、标题和草稿泄漏检查。
- `npm run preview`：本地查看 `dist/` 中的生产构建，不发布到外部平台。

未设置 `SITE_URL` 时使用本地站点地址并输出 `noindex` 元信息。生产构建使用 `SITE_URL=https://szm20060312.github.io`，生成正式站点的 canonical、语言版本链接和搜索引擎元信息。

## GitHub Pages 发布

推送到 `main` 分支后，`.github/workflows/deploy.yml` 自动安装依赖、运行测试、构建并检查公开产物，再发布到 GitHub Pages。也可以在仓库的 Actions 页面手动运行该流程。仓库的 Pages 构建来源设置为 **GitHub Actions**。

工作流使用 Node.js 24，GitHub Actions 依赖固定到对应版本的提交。任意测试或构建检查失败时不会执行发布。

开发文档、验证记录、原始学业和工作材料、环境变量文件及本地截图不进入公开仓库。公开仓库中的源码和 Markdown 也会对外可见，新增内容前应先确认适合公开。

## 当前内容

- 两种语言的首页、研究兴趣、项目列表与关于页面。
- 8 个项目的中英文详情，首页精选其中 4 个。
- 教育背景、算法工程师实习经历和公开联系信息。
- 中英文一页简历 PDF：首页提供当前语言版本下载，关于页提供两种版本。
- “关于”页的课程背景，以及按学期整理的中英文课程页（`/coursework/` 与 `/zh/coursework/`）。
- 一个包含中英文说明的 404 页面。
- 文章的数据结构与详情模板已准备，当前没有已发布文章，因此不生成文章入口和路由。

项目目前按个人项目、课程项目和学习实践分组。尚未由本人确认的项目开发起止年份不填入页面。

## 更新个人资料

编辑 `src/data/profile.ts`。姓名、公开邮箱、学校、教育背景、实习内容和兴趣都在这里集中维护；中英文文案分别存放在 `en` 与 `zh` 中。

课程信息在 `src/data/coursework.ts` 中维护，只允许学期、课程代码、课程名称与当前修读状态。当前整理 5 个学期的 37 条选科记录，不根据成绩排序或筛选课程。原始记录留在用户提供的目录，不加入网站或截图；成绩、绩点、排名等字段不写入课程数据。字段检查会拒绝意外混入的其他信息，构建还会检查公开页面及产物是否包含原始学业记录。

公开简历位于 `public/resume/song-zheming-resume-en.pdf` 和 `public/resume/song-zheming-resume-zh.pdf`，下载路径在 `profile.resumes` 中维护。更新时核对两种语言的教育、实习、项目和联系信息，并检查 PDF 的文字、链接与一页排版。可编辑 Word 文件及排版检查文件保存在本地，不进入公开仓库。

## 更新或新增项目

编辑 `src/content/projects/en/` 与 `src/content/projects/zh/` 下的 Markdown 文件。

- `slug` 决定详情路径，例如 `/projects/march-7th/`。
- 同一项目的两种语言使用相同的 `translationKey`。
- 同一语言内的 `slug` 与 `translationKey` 必须唯一。
- `category` 为 `personal`、`course` 或 `learning`。
- `order` 决定完整列表排序；可选的 `featuredOrder` 决定首页精选顺序。
- `kind`、`role`、`summary` 为对应语言的公开文案。
- `links` 只加入真实可用的 `code`、`demo` 或 `report` 资源。

正文介绍项目背景、实现思路、个人工作和当前范围。按当前设计偏好，项目列表与详情均采用纯文字排版，不显示预览图片或示意图。

## 发布文章

`src/content/writing/en/draft-template.md` 与中文对应文件是隐藏的写作模板。

1. 复制模板，为文章设置唯一的 `slug` 与跨语言 `translationKey`。
2. 完成两种语言的正文、标题和摘要，并填写真实的 `date`（`YYYY-MM-DD`）。
3. 将两份文件的 `draft` 都设为 `false`。
4. 运行测试和构建，再检查对应页面。

任意一份译文仍为草稿时，整组内容不进入公开页面。准备发布但缺少另一语言的文件时，构建会明确报错。两种译文均可发布后，文章导航、列表、详情和首页近期文章自动出现。

工作材料、实习鉴定表和未公开附件保留在原目录，网站只使用已整理的公开摘要。不要将未公开文件放入 `public/`。

## 代码结构

```text
src/
  data/profile.ts          个人资料与双语文案
  data/coursework.ts       仅包含公开字段的双语选科记录
  content/                 项目正文与文章草稿
  content.config.ts        内容集合与字段校验
  lib/                     路径、双语内容与发布规则
  components/              首页、项目、经历及相关组件
  layouts/SiteLayout.astro 公共布局、导航和页面元信息
  pages/[...path].astro    统一生成双语静态路由
  pages/404.astro          错误页
  styles/global.css        排版、颜色与响应式布局
scripts/check-build.mjs   构建产物检查
tests/                   发布规则测试
```

设计与素材核对记录保留在本地，公开仓库仅包含网站源码和运行说明。
