import { POST } from '@/src/service'
import type {GetTokenParams} from "containers/Login/types";

export const getTokenApi = (data: GetTokenParams) => POST('/base/login/token', data)
