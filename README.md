# 个人资料卡片 Profile Card

个人资料展示页面，采用现代化的毛玻璃设计风格（Glassmorphism），支持自定义内容和交互效果。

(其实是根据图片重构了一下小雨 x.com/amecandy_x的资料卡哦)

## ✨ 特性

- 🎨 **现代化设计** - 采用毛玻璃效果和渐变背景
- 🌍 **多地点展示** - 支持展示多个国家和城市的足迹
- 💡 **交互效果** - 胶囊标签具有悬停和点击效果
- 🖼️ **自定义头像** - 支持通过 URL 引入头像图片
- 🎯 **响应式布局** - 自适应不同屏幕尺寸
- ⚡ **Vite + React** - 快速的开发体验
- 🔤 **自定义字体** - 支持设置自定义字体

## 📦 快速开始

### 环境要求

- Node.js >= 14
- pnpm（推荐）或 npm

### 安装步骤

```bash
# 1. 创建项目
pnpm create vite profile-card --template react
cd profile-card

# 2. 安装依赖
pnpm install

# 3. 复制代码文件
# 将提供的 App.jsx、App.css、index.css、main.jsx 复制到对应位置

# 4. 启动开发服务器
pnpm dev
```

### 构建生产版本

```bash
# 构建
pnpm build

# 预览构建结果
pnpm preview
```

## 📁 项目结构

```
profile-card/
├── src/
│   ├── App.jsx          # 主组件（包含所有内容和数据）
│   ├── App.css          # 组件样式
│   ├── main.jsx         # 入口文件
│   └── index.css        # 全局样式
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 自定义配置

### 1. 修改头像

在 `App.jsx` 中找到并修改：

```javascript
const avatarUrl = "你的头像URL"
```

### 2. 自定义字体

```javascript
const customFont = "Noto Sans SC"  // 或其他字体名称
```

支持的字体示例：
- `"Noto Sans SC"` - 思源黑体
- `"Microsoft YaHei"` - 微软雅黑
- `"PingFang SC"` - 苹方
- 留空则使用默认系统字体

### 3. 修改个人信息

在 `App.jsx` 中修改以下数据：

```javascript
// 头部信息
<h1>你的名字</h1>
<div className="username">@用户名 · 昵称 · 别名</div>
<div className="bio">「个人简介」</div>
<div className="website">—— 我的博客 www.example.com</div>

// 足迹数据
const locations = [
  { 
    flag: '🇯🇵', 
    name: '日本 Japan', 
    cities: ['大阪', '京都', '奈良'] 
  },
  // 添加更多地点...
]

// 属性标签
const attributes = [
  '18岁',
  '跨性别女性',
  'HRT・2022',
  // 添加更多属性...
]

// 额外信息
const extraInfo = ['死硬左派', '不是在旅行就是在期待旅行', '']

// 兴趣标签
const tags = ['OC', 'Vocaloid', 'P社游戏', '山东济南']

// 注意事项
const notices = [
  '会有血图',
  '会使用精神活性药物',
  '会讨论政治和发表暴论',
  '会玩消失'
]

// 想说的话
const quotes = [
  '会屏蔽我不喜欢的人，同样，不喜欢我请屏蔽我。',
  '随时欢迎私信聊天扩列，我很闷，同城或周边也可线下。',
  '可解答计算机方面的问题，我兴趣广泛。'
]
```

### 4. 修改配色

在 `index.css` 中修改背景渐变：

```css
body {
  background: linear-gradient(135deg, #a8d8ea 0%, #d4a5e3 50%, #f4c2d7 100%);
}
```

在 `App.css` 中修改卡片和胶囊颜色：

```css
/* 卡片背景 */
.profile-card {
  background: rgba(255, 255, 255, 0.75);
}

/* 属性胶囊（白色）*/
.info-value {
  background: rgba(255, 255, 255, 0.85);
}

/* 足迹胶囊（灰色）*/
.city-tag {
  background: rgba(230, 230, 230, 0.9);
}
```

## 🎯 功能说明

### 交互效果

所有胶囊标签都具有以下交互效果：

- **悬停效果** - 鼠标悬停时标签会轻微上浮并显示阴影
- **点击效果** - 点击时会出现边框反馈
- **平滑过渡** - 所有动画都有 0.2 秒的过渡效果

### 响应式设计

- **桌面端** - 双列卡片布局
- **移动端** - 自动切换为单列布局
- **头像和头部** - 在小屏幕上自动调整为垂直布局

## 🛠️ 技术栈

- **React** - UI 组件库
- **Vite** - 构建工具
- **CSS3** - 样式和动画
  - Flexbox 布局
  - CSS Grid 布局
  - Backdrop Filter（毛玻璃效果）
  - CSS Transitions（过渡动画）

## 📝 开发说明

### 添加新的卡片区域

1. 在 `App.jsx` 中添加数据数组
2. 在 JSX 中添加新的 `<div className="card">` 区块
3. 根据需要在 `App.css` 中添加自定义样式

### 修改卡片布局

在 `App.css` 中修改网格布局：

```css
.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr; /* 两列 */
  gap: 20px;
}

/* 单列布局 */
.content-grid {
  grid-template-columns: 1fr;
}
```

## 🎨 设计细节

- **毛玻璃效果** - 使用 `backdrop-filter: blur()` 实现
- **圆角设计** - 统一使用 20px 圆角
- **阴影层次** - 多层阴影营造深度感
- **颜色对比** - 白色胶囊用于属性，灰色胶囊用于足迹
- **图标支持** - 使用 emoji 作为国旗图标

## 🚀 部署

### Vercel

```bash
# 安装 Vercel CLI
pnpm add -g vercel

# 部署
vercel
```

### Netlify

```bash
# 构建
pnpm build

# 将 dist 文件夹部署到 Netlify
```

### GitHub Pages

1. 修改 `vite.config.js` 添加 base 路径
2. 运行 `pnpm build`
3. 将 `dist` 文件夹推送到 `gh-pages` 分支

---

⭐ 如果这个项目对你有帮助，欢迎给个 Star！