import { NextRequest, NextResponse } from 'next/server'
import { getOrSet, deleteCache } from '@/lib/cache'
import { getCheckins, createCheckin } from '@/lib/supabase'
import { validateRequest } from '@/lib/auth'

export async function GET(request: NextRequest) {
  try {
    const validation = validateRequest(request)
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      )
    }

    const userId = validation.userId!
    const cacheKey = `checkins:${userId}`

    const data = await getOrSet(
      cacheKey,
      () => getCheckins(userId),
      300
    )

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, max-age=300',
        'Access-Control-Allow-Origin': '*',
      },
    })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const validation = validateRequest(request)
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      )
    }

    const userId = validation.userId!
    const body = await request.json()

    const checkin = await createCheckin({
      ...body,
      user_id: userId,
    })

    await deleteCache(`checkins:${userId}`)

    return NextResponse.json(checkin, {
      status: 201,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}
