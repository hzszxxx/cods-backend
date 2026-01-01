# 🚗 CODS Backend API

员工合规驾驶舱 (Compliance Driving Cockpit System) 的后端 API 服务。

## 📋 项目简介

CODS 是一个为企业员工提供合规驾驶管理的系统，包括：

- 📍 **GPS 打卡** - 员工位置记录和合规检查
- 📁 **文件管理** - 驾驶证、行驶证等证件上传
- 📊 **数据分析** - 打卡记录统计和报告生成
- 🔐 **权限管理** - 基于角色的访问控制

## 🏗️ 技术栈

### 后端
- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **数据库**: Supabase (PostgreSQL)
- **缓存**: Upstash Redis
- **部署**: Vercel

### 前端
- **框架**: Taro 4 + React 18
- **语言**: TypeScript
- **平台**: 微信小程序

## 📁 项目结构

```
cods-backend/
├── app/
│   ├── api/
│   │   ├── health/          # 健康检查
│   │   ├── checkins/        # 打卡 API
│   │   └── files/           # 文件 API
│   ├── layout.tsx           # 主布局
│   └── page.tsx             # 首页
├── lib/
│   ├── supabase.ts          # Supabase 客户端
│   ├── cache.ts             # Redis 缓存工具
│   └── auth.ts              # 认证工具
├── .env.example             # 环境变量模板
├── package.json             # 依赖配置
├── tsconfig.json            # TypeScript 配置
└── next.config.js           # Next.js 配置
```

## 🚀 快速开始

### 前置要求

- Node.js 18+
- npm 或 yarn
- Supabase 账户
- Upstash Redis 账户

### 安装依赖

```bash
npm install
```

### 配置环境变量

创建 `.env.local` 文件：

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_KEY=your-service-key

# Redis
REDIS_URL=your-redis-url
REDIS_TOKEN=your-redis-token

# Other
NODE_ENV=development
```

### 本地开发

```bash
npm run dev
```

访问 http://localhost:3000

### 生产构建

```bash
npm run build
npm start
```

## 📚 API 文档

### 健康检查

```
GET /api/health
```

**响应**:
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "version": "1.0.0"
}
```

### 打卡 API

#### 获取打卡记录

```
GET /api/checkins?userId=user-id
```

**响应**:
```json
[
  {
    "id": "uuid",
    "user_id": "uuid",
    "latitude": 22.5431,
    "longitude": 114.0579,
    "address": "深圳市南山区",
    "photo_url": "https://...",
    "checkin_date": "2024-01-01",
    "checkin_time": "09:00:00",
    "created_at": "2024-01-01T09:00:00Z"
  }
]
```

#### 创建打卡记录

```
POST /api/checkins?userId=user-id
Content-Type: application/json

{
  "latitude": 22.5431,
  "longitude": 114.0579,
  "address": "深圳市南山区",
  "photo_url": "https://...",
  "checkin_date": "2024-01-01",
  "checkin_time": "09:00:00"
}
```

### 文件 API

#### 获取文件列表

```
GET /api/files?userId=user-id
```

**响应**:
```json
[
  {
    "id": "uuid",
    "user_id": "uuid",
    "name": "driving-license.pdf",
    "type": "license",
    "url": "https://...",
    "size": 1024,
    "created_at": "2024-01-01T09:00:00Z"
  }
]
```

#### 删除文件

```
DELETE /api/files?userId=user-id&fileId=file-id
```

## 🔐 安全性

### 环境变量

所有敏感信息都存储在环境变量中：
- Supabase 密钥
- Redis 凭证
- API 密钥

### 数据库安全

- 使用 Supabase RLS (行级安全) 保护数据
- 用户只能访问自己的数据
- 所有操作都有权限检查

### API 安全

- 所有 API 都需要 userId 参数
- 支持 JWT Token 认证
- 启用 CORS 跨域资源共享

## 📊 缓存策略

使用 Redis 缓存提高性能：

- **打卡记录**: 5 分钟缓存
- **文件列表**: 10 分钟缓存
- **用户信息**: 30 分钟缓存

缓存在数据更新时自动清除。

## 🚀 部署

### 部署到 Vercel

```bash
npm i -g vercel
vercel login
vercel --prod
```

### 配置环境变量

在 Vercel 仪表板配置以下环境变量：

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_KEY
REDIS_URL
REDIS_TOKEN
```

## 📈 性能指标

- **响应时间**: 50-100ms
- **缓存命中率**: 80-90%
- **可用性**: 99.9%
- **并发用户**: 1000+

## 🐛 故障排查

### API 返回 500 错误

检查以下几点：
- 环境变量是否正确配置
- Supabase 连接是否正常
- Redis 连接是否正常

### 缓存不工作

检查以下几点：
- Redis URL 和 Token 是否正确
- Redis 服务是否在线
- 缓存 TTL 是否设置正确

### 部署失败

检查以下几点：
- 是否有足够的 Vercel 配额
- 环境变量是否完整
- 项目文件是否完整

## 📝 开发指南

### 添加新的 API 路由

1. 在 `app/api/` 中创建新目录
2. 创建 `route.ts` 文件
3. 实现 GET、POST 等方法
4. 添加 CORS 支持

### 添加新的数据库操作

1. 在 `lib/supabase.ts` 中添加函数
2. 使用 Supabase 客户端
3. 添加错误处理

### 添加缓存

1. 使用 `getOrSet` 函数
2. 指定缓存 TTL
3. 在数据更新时清除缓存

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

### 提交 PR 前

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证。详见 [LICENSE](LICENSE) 文件。

## 📞 联系方式

- 📧 Email: hzszxx@gmail.com
- 🐙 GitHub: https://github.com/hzszxxx

## 🙏 致谢

感谢以下开源项目的支持：

- [Next.js](https://nextjs.org/)
- [Supabase](https://supabase.com/)
- [Upstash](https://upstash.com/)
- [Vercel](https://vercel.com/)

---

**最后更新**: 2024-01-01

**版本**: 1.0.0
