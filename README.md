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
