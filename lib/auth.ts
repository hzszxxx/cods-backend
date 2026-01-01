import { NextRequest } from 'next/server'

/**
 * 从请求头获取 JWT Token
 */
export const getTokenFromRequest = (request: NextRequest): string | null => {
  const authHeader = request.headers.get('authorization')
  if (!authHeader) return null

  const parts = authHeader.split(' ')
  if (parts.length !== 2 || parts[0] !== 'Bearer') return null

  return parts[1]
}

/**
 * 从请求头获取用户 ID
 */
export const getUserIdFromRequest = (request: NextRequest): string | null => {
  const userId = request.nextUrl.searchParams.get('userId')
  return userId
}

/**
 * 验证请求
 */
export const validateRequest = (request: NextRequest): { valid: boolean; userId?: string; error?: string } => {
  const userId = getUserIdFromRequest(request)

  if (!userId) {
    return {
      valid: false,
      error: 'userId is required',
    }
  }

  return {
    valid: true,
    userId,
  }
}
