import { POST } from '@/src/service'
import type { RegisterParams } from 'containers/User/types'

export const registerApi = (data: RegisterParams) => POST('/user/register', data)
