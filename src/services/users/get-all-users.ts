import type { ApiContext, User } from 'types'
import { fetcher } from 'utils'

/**
 * ユーザーAPI（一覧取得）
 * @param context APIコンテキスト
 * @returns ユーザー一覧
 */
const getAllUsers = async (context: ApiContext): Promise<User[]> => {
  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/users`, {
    headers: {
      Accept: 'application/json',
      'Content_Type': 'application/json',
    },
  })
}

export default getAllUsers