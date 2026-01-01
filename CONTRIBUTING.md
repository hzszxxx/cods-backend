# 🤝 贡献指南

感谢你对 CODS Backend 项目的兴趣！我们欢迎各种形式的贡献。

## 📋 贡献类型

### 🐛 报告 Bug

如果你发现了 bug，请：

1. 检查 [Issues](https://github.com/hzszxxx/cods-backend/issues) 中是否已有相同的报告
2. 如果没有，创建新的 Issue
3. 提供以下信息：
   - Bug 的描述
   - 复现步骤
   - 预期行为
   - 实际行为
   - 环境信息 (Node.js 版本、操作系统等)

### ✨ 提交功能请求

如果你有新的功能想法：

1. 创建新的 Issue
2. 描述功能的用途和好处
3. 提供可能的实现方案

### 📚 改进文档

如果你发现文档有误或可以改进：

1. Fork 项目
2. 修改文档
3. 提交 Pull Request

### 💻 提交代码

如果你想贡献代码：

1. Fork 项目
2. 创建特性分支
3. 提交 Pull Request

## 🚀 开发流程

### 1. Fork 项目

点击 GitHub 上的 "Fork" 按钮。

### 2. Clone 你的 Fork

```bash
git clone https://github.com/your-username/cods-backend.git
cd cods-backend
```

### 3. 添加上游仓库

```bash
git remote add upstream https://github.com/hzszxxx/cods-backend.git
```

### 4. 创建特性分支

```bash
git checkout -b feature/your-feature-name
```

### 5. 安装依赖

```bash
npm install
```

### 6. 进行更改

编辑代码并测试你的更改。

### 7. 本地测试

```bash
npm run dev
npm run lint
```

### 8. 提交更改

```bash
git add .
git commit -m "Add your feature description"
```

### 9. 推送到你的 Fork

```bash
git push origin feature/your-feature-name
```

### 10. 创建 Pull Request

在 GitHub 上创建 Pull Request，描述你的更改。

## 📝 代码风格

### TypeScript

- 使用 TypeScript 编写代码
- 为所有函数添加类型注解
- 避免使用 `any` 类型

### 命名规范

- 文件名: `kebab-case` (例如: `user-service.ts`)
- 函数名: `camelCase` (例如: `getUserById`)
- 常量: `UPPER_SNAKE_CASE` (例如: `MAX_RETRIES`)
- 类名: `PascalCase` (例如: `UserService`)

### 代码格式

- 使用 2 个空格缩进
- 行长不超过 100 个字符
- 使用分号结尾
- 使用单引号

### 注释

```typescript
/**
 * 获取用户信息
 * @param userId - 用户 ID
 * @returns 用户对象
 */
export const getUser = async (userId: string) => {
  // 实现代码
}
```

## ✅ Pull Request 检查清单

提交 PR 前，请确保：

- [ ] 代码遵循项目的代码风格
- [ ] 添加了必要的注释和文档
- [ ] 测试通过 (`npm run lint`)
- [ ] 没有引入新的警告
- [ ] 更新了相关文档
- [ ] 提交信息清晰明了

## 📖 提交信息规范

使用以下格式编写提交信息：

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type

- `feat`: 新功能
- `fix`: Bug 修复
- `docs`: 文档更新
- `style`: 代码风格更改
- `refactor`: 代码重构
- `perf`: 性能优化
- `test`: 测试相关
- `chore`: 构建、依赖等

### 示例

```
feat(api): add user authentication endpoint

Add JWT token validation for API endpoints.
Implement role-based access control.

Closes #123
```

## 🧪 测试

### 运行测试

```bash
npm run test
```

### 编写测试

在 `__tests__` 目录中添加测试文件。

## 📚 文档

### 更新 README

如果你的更改影响了 API 或配置，请更新 README.md。

### 添加代码注释

为复杂的代码添加注释，解释为什么这样做。

## 🎯 审查流程

1. 提交 PR 后，项目维护者会进行审查
2. 可能会要求进行更改
3. 一旦批准，PR 将被合并

## ❓ 常见问题

### Q: 我应该在哪个分支上工作？

A: 始终从 `main` 分支创建特性分支。

### Q: 如何同步我的 Fork 与上游仓库？

A: 
```bash
git fetch upstream
git rebase upstream/main
git push origin main
```

### Q: 我的 PR 被拒绝了怎么办？

A: 这很正常。请查看反馈，进行必要的更改，然后重新提交。

## 📞 联系方式

如有问题，请：

1. 查看 [Issues](https://github.com/hzszxxx/cods-backend/issues)
2. 创建新的 Issue
3. 发送邮件至 hzszxx@gmail.com

## 🙏 感谢

感谢所有为这个项目做出贡献的人！

---

**祝你贡献愉快！** 🎉
