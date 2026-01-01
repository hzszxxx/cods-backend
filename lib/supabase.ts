import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

/**
 * 获取用户的打卡记录
 */
export const getCheckins = async (userId: string, limit = 20) => {
  const { data, error } = await supabase
    .from('checkins')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) throw error
  return data
}

/**
 * 创建打卡记录
 */
export const createCheckin = async (checkin: any) => {
  const { data, error } = await supabase
    .from('checkins')
    .insert([checkin])
    .select()

  if (error) throw error
  return data[0]
}

/**
 * 获取用户的文件
 */
export const getFiles = async (userId: string, limit = 20) => {
  const { data, error } = await supabase
    .from('files')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) throw error
  return data
}

/**
 * 删除文件
 */
export const deleteFile = async (fileId: string) => {
  const { error } = await supabase
    .from('files')
    .delete()
    .eq('id', fileId)

  if (error) throw error
}

/**
 * 获取用户信息
 */
export const getUser = async (userId: string) => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single()

  if (error) throw error
  return data
}

/**
 * 获取公司信息
 */
export const getCompany = async (companyId: string) => {
  const { data, error } = await supabase
    .from('companies')
    .select('*')
    .eq('id', companyId)
    .single()

  if (error) throw error
  return data
}
