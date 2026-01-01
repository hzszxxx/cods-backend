import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.REDIS_URL!,
  token: process.env.REDIS_TOKEN!,
})

export interface CacheOptions {
  ttl?: number
  force?: boolean
}

/**
 * 从缓存获取数据
 */
export const getFromCache = async <T>(key: string): Promise<T | null> => {
  try {
    const data = await redis.get(key)
    return data as T | null
  } catch (error) {
    console.error('Cache get error:', error)
    return null
  }
}

/**
 * 设置缓存
 */
export const setCache = async <T>(
  key: string,
  value: T,
  ttl = 300
): Promise<void> => {
  try {
    await redis.setex(key, ttl, JSON.stringify(value))
  } catch (error) {
    console.error('Cache set error:', error)
  }
}

/**
 * 删除缓存
 */
export const deleteCache = async (key: string): Promise<void> => {
  try {
    await redis.del(key)
  } catch (error) {
    console.error('Cache delete error:', error)
  }
}

/**
 * 获取或设置缓存
 */
export const getOrSet = async <T>(
  key: string,
  fn: () => Promise<T>,
  ttl = 300
): Promise<T> => {
  const cached = await getFromCache<T>(key)
  if (cached) {
    return cached
  }

  const data = await fn()
  await setCache(key, data, ttl)

  return data
}

/**
 * 清空匹配的缓存
 */
export const clearCache = async (pattern: string): Promise<void> => {
  try {
    const keys = await redis.keys(pattern)
    if (keys.length > 0) {
      await redis.del(...(keys as string[]))
    }
  } catch (error) {
    console.error('Cache clear error:', error)
  }
}
