# 能量泉 (Power Spring Ministries) - 全站图片 SEO 与静态资源管理规范
# Image SEO Specification & Asset Management Standard

> **核心原则（必守常识）**：
> 1. **双语核验**：改动任何一处代码、文案或图片说明，必须同时核验「中文 (`zh`)」与「英文 (`en`)」双语的完整性与排版呈现。
> 2. **三端适配**：每张图片在「桌面端 (≥1024px)」、「平板端 (768px~1023px)」、「手机移动端 (<768px)」均需保证无布局偏移 (CLS = 0)、无比例拉伸变形、触控与浏览体验舒适。
> 3. **全站图片 SEO 优先**：每张图片都应当利于搜索引擎收录与社交分享传播，严禁无意义随机构造文件名。

---

## 一、图片 SEO 语义化命名规范 (Semantic File Naming)

### 1. 为什么文件名对 SEO 至关重要？
Google、Bing 等搜索引擎的图像检索爬虫（如 Googlebot-Image）在爬取图片时，文件名是判断图片主题、地理位置、业务关联最直接的关键信号。
- **反例（严重不利于 SEO）**：`IMG_202401.jpg`、`DSC_0032.jpg`、`_________00ba05c5.jpg`、`photo_1.png`
  - 爬虫无法从中提取任何关键词，直接判定为无语义资产，严重削弱搜索排名权重。
- **正例（最佳 SEO 实践）**：`power-spring-florida-winter-sunshine-trip.jpg`
  - 爬虫直接识别：机构 (`power-spring`) + 地点 (`florida`) + 季节/活动 (`winter-sunshine-trip`)。

### 2. 命名命名结构标准
全站所有活动照片与资源必须遵循 **小写连字符（Kebab-Case）**：
```
[机构/品牌前缀]-[地理位置/活动主题]-[核心特征/人群/场景].[扩展名]
```

#### 典型命名示例：
| 活动 / 场景 | 原占位名 / 原始上传名 | SEO 语义化标准重命名 | 目标核心关键词 |
| :--- | :--- | :--- | :--- |
| **冬季佛罗里达温暖之旅** (本次替换) | `_________00ba05c5.jpg` | `power-spring-florida-winter-sunshine-trip.jpg` | power spring, florida winter trip, community sunshine excursion |
| **Maumee大河别墅退修** | `maumee_retreat.svg` | `power-spring-maumee-river-villa-retreat.jpg` | maumee river retreat, spiritual renewal |
| **密歇根湖畔户外洗礼** | `lake_michigan_baptism.svg` | `lake-michigan-outdoor-baptism-ceremony.jpg` | lake michigan baptism, outdoor christian baptism |
| **校园创业赋能论坛** | `entrepreneurship_forum.svg` | `campus-entrepreneurship-innovation-forum.jpg` | campus entrepreneurship, innovation mentorship |
| **微软高管AI科技讲座** | `ai_seminar.svg` | `microsoft-executive-ai-technology-seminar.jpg` | ai seminar, tech career talk |
| **爱心食品站蔬果派发** | `food_pantry_*.jpg` | `power-spring-weekly-fresh-food-pantry.jpg` | weekly food pantry, fresh produce distribution |
| **周六Zoom心灵辅导** | `counseling_care_*.jpg` | `saturday-zoom-pastoral-counseling-seminar.jpg` | saturday pastoral counseling, zoom mental health |

---

## 二、HTML / JSX 标签属性规范 (Tag Attributes & Core Web Vitals)

在 React 组件中渲染任何 `<img>` 标签，必须强制补齐以下 5 项属性：

```tsx
<img
  src={item.image}
  alt={language === 'zh' 
    ? `${item.titleZh} - ${item.categoryZh} | 能量泉非营利社区关怀` 
    : `${item.titleEn} - ${item.categoryEn} | Power Spring Ministries INC`}
  title={language === 'zh' ? item.titleZh : item.titleEn}
  loading="lazy"
  decoding="async"
  className="w-full h-full object-cover"
  referrerPolicy="no-referrer"
/>
```

### 1. `alt` 替代文本（SEO & 无障碍核心）
- **严禁**：留空 `alt=""`、使用泛指词 `alt="image"` 或单一单词。
- **强制双语动态化**：根据当前 `language` 变量分别渲染中英完整描述。
- **结构公式**：`[活动/内容具体标题] - [分类标签] | [机构权威名称]`。
- **作用**：
  1. 提升 Google Images 排名与图文匹配相关性。
  2. 满足屏幕阅读器 (Screen Readers) 与 WCAG 2.1 无障碍访问标准。
  3. 网络弱网或加载失败时，呈现体面的替代描述。

### 2. `title` 属性
- 鼠标悬停时展示原生 Tooltip，向搜索引擎与用户提供上下文确认。

### 3. `loading="lazy"` 与 `decoding="async"`
- **首屏非视口图片**：必须加 `loading="lazy"`，节省用户移动端流量并加速首屏 Largest Contentful Paint (LCP)。
- **首屏 Banner / Hero 图片**：使用 `loading="eager"` 确保最快渲染。
- **`decoding="async"`**：将图片解码移至主线程外，避免页面滚动卡顿与丢帧。

### 4. 容器防抖动 (CLS = 0)
- 图片外层必须有固定或比例宽高（如 `h-56 sm:h-64`、`aspect-[4/3]`），确保在图片加载完成前浏览器已预先分配好视口空间，完全避免 Cumulative Layout Shift (CLS) 评分扣分。

---

## 三、三端自适应响应式适配标准 (Three-Tier Responsive)

每张照片必须在以下三端进行实测验收：

| 终端 | 视口断点 | 图片容器适配标准 | 视觉焦点与排版表现 |
| :--- | :--- | :--- | :--- |
| **手机移动端** | `< 768px` (`sm`) | 单列网格 (1 Col)，容器高度 `h-56` (224px)，全宽铺满 | `object-cover` 居中对齐，人物面部与自然主体居中展示；圆角 8px，卡片紧凑整洁 |
| **平板中端** | `768px ~ 1023px` (`md`) | 双列网格 (2 Cols)，容器高度 `h-60` (240px) | 列间距 `gap-6`，文本与图文比例平衡，无文字重叠挤压 |
| **桌面宽屏** | `≥ 1024px` (`lg` / `xl`) | 三列网格 (3 Cols)，容器高度 `h-64` (256px) | 支持微交互缩放 (`group-hover:scale-[1.02]`)，悬浮遮罩与 Lightbox 大图查看器完整无损 |

---

## 四、社交分享与搜索引擎结构化数据 (OpenGraph & Schema.org)

高质量活动真实照片应当作为全站社交卡片与搜索引擎知识图谱的核心素材：

### 1. OpenGraph & Twitter Card (`index.html`)
```html
<!-- OpenGraph 社交卡片 -->
<meta property="og:image" content="/images/gallery/power-spring-florida-winter-sunshine-trip.jpg" />
<meta property="og:image:alt" content="Power Spring Ministries Community Florida Sunshine Trip | 能量泉社区关怀" />
<meta property="og:image:width" content="1706" />
<meta property="og:image:height" content="1279" />

<!-- Twitter / X 社交卡片 -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="/images/gallery/power-spring-florida-winter-sunshine-trip.jpg" />
```

### 2. Schema.org 结构化数据 (JSON-LD)
在 `index.html` 的 `<script type="application/ld+json">` 中声明官方图片：
```json
{
  "@context": "https://schema.org",
  "@type": "NGO",
  "name": "Power Spring Ministries INC",
  "alternateName": "能量泉",
  "url": "https://powerspringministries.org",
  "image": "https://powerspringministries.org/images/gallery/power-spring-florida-winter-sunshine-trip.jpg"
}
```

---

## 五、全站图集资源清单与替换对照表 (Asset Registry & Migration Status)

配置文件路径：`src/assets/images/index.ts`  
多语言文案路径：`src/locales/translations.ts`

| 图集 ID | 功能/活动名称 | 当前资源状态 | 对应文件路径 | SEO 标准命名建议 |
| :--- | :--- | :--- | :--- | :--- |
| **g15** | **冬季佛罗里达温暖之旅** | ✅ **已替换真实高清照片** (1706×1279) | `/public/images/gallery/power-spring-florida-winter-sunshine-trip.jpg` | `power-spring-florida-winter-sunshine-trip.jpg` |
| g1 | 初到学者临时落脚点 | 🎨 高清写实插画 | `housing_shelter_*.jpg` | `power-spring-student-temporary-housing.jpg` |
| g2 | 每周新鲜蔬果派发 | 🎨 高清写实插画 | `food_pantry_*.jpg` | `power-spring-weekly-fresh-food-pantry.jpg` |
| g3 | 周六 Zoom 心灵辅导 | 🎨 高清写实插画 | `counseling_care_*.jpg` | `power-spring-saturday-zoom-counseling.jpg` |
| g4 | 道路爆胎抢修与救援 | 🎨 高清写实插画 | `car_roadside_*.jpg` | `power-spring-emergency-roadside-aid.jpg` |
| g5 | 英语口语角与茶话会 | 🎨 高清写实插画 | `english_tax_*.jpg` | `power-spring-conversational-english-club.jpg` |
| g6 | 长者长期关怀公寓 | 🎨 高清写实插画 | `housing_shelter_*.jpg` | `power-spring-senior-assisted-housing.jpg` |
| g7 | 举办校园创业论坛 | ⏳ 待替换真实照片 | `/public/images/gallery/entrepreneurship_forum.svg` | `power-spring-campus-entrepreneurship-forum.jpg` |
| g8 | 每年长途自驾旅行 | ⏳ 待替换真实照片 | `/public/images/gallery/road_trips.svg` | `power-spring-annual-community-road-trip.jpg` |
| g9 | 企管培训专家讲座 | ⏳ 待替换真实照片 | `/public/images/gallery/business_seminar.svg` | `power-spring-business-management-seminar.jpg` |
| g10 | Maumee大河别墅retreat | ⏳ 待替换真实照片 | `/public/images/gallery/maumee_retreat.svg` | `power-spring-maumee-river-villa-retreat.jpg` |
| g11 | 圣诞晚会欢聚 | ⏳ 待替换真实照片 | `/public/images/gallery/christmas_party.svg` | `power-spring-christmas-celebration-gathering.jpg` |
| g12 | 微软高管AI讲座 | ⏳ 待替换真实照片 | `/public/images/gallery/ai_seminar.svg` | `power-spring-microsoft-ai-tech-seminar.jpg` |
| g13 | Lake Michigan Baptism | ⏳ 待替换真实照片 | `/public/images/gallery/lake_michigan_baptism.svg` | `power-spring-lake-michigan-baptism-ceremony.jpg` |
| g14 | 湖南跨洋宣教探访 | ⏳ 待替换真实照片 | `/public/images/gallery/hunan_visit.svg` | `power-spring-hunan-mission-community-visit.jpg` |
| g16 | 美籍同工英文查经 | ⏳ 待替换真实照片 | `/public/images/gallery/bible_study.svg` | `power-spring-cross-cultural-bible-study.jpg` |
| g17 | 华人妈妈互助小家 | ⏳ 待替换真实照片 | `/public/images/gallery/beautiful_moms.svg` | `power-spring-beautiful-moms-mutual-support.jpg` |

---

## 六、新照片替换标准作业程序 (SOP)

未来每次获取到真实活动照片时，严格执行以下 5 步：

1. **第 1 步：分析画面与确定关键词**
   - 识别画面中的主体人群、地点背景、活动性质。
2. **第 2 步：SEO 命名并放入 `/public/images/gallery/`**
   - 采用标准格式重命名：`power-spring-[主题]-[地点].[jpg/webp/png]`。
3. **第 3 步：更新 `src/assets/images/index.ts`**
   - 将对应 key 的路径指向新文件。
4. **第 4 步：同步更新 `src/locales/translations.ts`（中英双语分支）**
   - 检查 `titleZh`、`titleEn`、`descZh`、`descEn`，确保文案与画面内容真实匹配，且兼顾搜索引擎关键词密度。
5. **第 5 步：三端与双语自检**
   - 中文与英文各切换一次，在手机端（<768px）、平板端（768~1023px）、桌面端（≥1024px）进行视觉验证与构建校验（`compile_applet`）。
