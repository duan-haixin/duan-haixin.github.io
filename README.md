# 段海新个人学术主页 — 部署指南

## 文件结构

```
academic-website/
├── index.html          # 主页（已填入真实信息）
├── css/style.css       # 全站样式
├── js/main.js          # 论文按年份筛选 & 导航高亮
├── images/
│   └── avatar.jpg      # ← 替换为您的照片（建议 400×400 px）
└── README.md
```

## 待替换内容

编辑 `index.html`，搜索以下内容并按需调整：

| 内容 | 位置 | 说明 |
|---|---|---|
| `images/avatar.jpg` | hero 区域 | 放入本人照片 |
| 各 `href="#"` | pub-links | 替换为论文 PDF / DOI 真实链接 |
| 论文列表 | `#publications` | 按需增删，复制 `<div class="pub-item">` 模板 |

## 发布到 GitHub Pages

```bash
cd academic-website
git init
git add .
git commit -m "init: Haixin Duan academic homepage"

# 在 GitHub 新建仓库，名称建议：duanhx.github.io
git remote add origin https://github.com/duanhx/duanhx.github.io.git
git push -u origin main
```

约 1 分钟后访问 `https://duanhx.github.io`。

## 本地预览

```bash
python3 -m http.server 8080
# 浏览器打开 http://localhost:8080
```

## 搜索引擎收录与站长平台提交

站点已准备好以下 SEO 文件和标签：

- `robots.txt`：允许搜索引擎抓取全站，并声明 `https://duanhaixin.cn/sitemap.xml`
- `sitemap.xml`：提交中文主页和英文页，并标注双语 alternate URL
- `index.html` / `en.html`：包含 canonical、hreflang、Open Graph、Twitter Card、Person 结构化数据

### Google Search Console

1. 访问 `https://search.google.com/search-console`，使用自己的 Google 账号登录。
2. 添加资源，推荐选择 Domain property：`duanhaixin.cn`。
3. 按 Google 提示完成所有权验证。对 GitHub Pages 自定义域名，优先使用 DNS TXT 记录验证；也可使用 HTML 文件或 meta 标签验证。
4. 验证通过后进入 `Sitemaps`，提交：

```text
https://duanhaixin.cn/sitemap.xml
```

5. 对 `https://duanhaixin.cn/` 和 `https://duanhaixin.cn/en.html` 使用 URL Inspection，确认可抓取后请求编入索引。

### 百度搜索资源平台

1. 访问 `https://ziyuan.baidu.com/`，使用自己的百度账号登录。
2. 在站点管理中添加站点：`https://duanhaixin.cn`。
3. 按百度提示完成站点验证。可选择 DNS 验证、HTML 文件验证或 meta 标签验证。
4. 验证通过后，在资源提交 / 普通收录 / Sitemap 中提交：

```text
https://duanhaixin.cn/sitemap.xml
```

5. 如果百度提供手动提交入口，也建议提交：

```text
https://duanhaixin.cn/
https://duanhaixin.cn/en.html
```

> 注意：站点验证 token 与账号绑定，不能提前写死在仓库里。拿到 Google 或百度给出的 HTML 文件名、meta 标签或 DNS TXT 值后，再按平台要求添加即可。

## 添加新论文

在 `index.html` 的 `pub-list` 中复制以下模板：

```html
<div class="pub-item" data-type="2025">
  <div class="pub-title">论文标题</div>
  <div class="pub-authors">第一作者, …, <strong>Haixin Duan</strong>, …</div>
  <div class="pub-venue">会议/期刊名称 年份</div>
  <div class="pub-links">
    <a class="pub-link pdf" href="PDF链接">PDF</a>
    <a class="pub-link doi" href="DOI链接">DOI</a>
  </div>
</div>
```

`data-type` 填写年份（如 `2025`），年份筛选按钮会自动生效。
若需新增年份筛选按钮，在 `pub-filters` 区域复制一行即可：

```html
<button class="filter-btn" data-filter="2025">2025</button>
```
