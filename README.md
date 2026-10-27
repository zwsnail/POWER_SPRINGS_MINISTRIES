# 能量泉 | Power Spring Ministries INC

能量泉非营利机构官方网站 (Power Spring Ministries INC official web application).

---

## ⚠️ 核心开发准则（必须严格遵守）

> **每次改动任何一处代码或界面，必须同时完成以下两项验证：**
> 1. **中英文双语验证**：同时切换并检查中文与英文，确保中英文案均完整展示、无截断、无换行混乱或容器溢出。
> 2. **三端自适应适配**：分别在桌面端（≥1024px）、平板端（768px~1023px）、手机端（<768px）进行适配测试。
>
> 详细规范请参阅：[DEVELOPMENT_GUIDELINES.md](./DEVELOPMENT_GUIDELINES.md)

---

## 技术栈与架构

- **前端框架**：React 18 + TypeScript + Vite
- **样式与设计系统**：Tailwind CSS + Lucide Icons
- **多语言管理**：集中式字典 `src/data/translations.ts`（中英双语）
- **核心组件规范**：
  - 语言切换开关统一收拢在 `Footer` 底部，不再在 `Header` 或汉堡菜单抽屉中重复安放。
  - 品牌标语保持完整。

## 运行与构建

```bash
# 安装依赖
npm install

# 本地启动
npm run dev

# 编译与类型检查
npm run build
```
