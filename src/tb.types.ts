export type EmptyObject<Key extends string | number = string | number, T = any> = {
  [K in Key]: T;
};

export type GetObjectValue<T = any> = {
  [K: string]: T
}

export interface PageParams {
  pageSize: number;
  page: number;
}

export interface UserInfo {
  id: number
  createdAt: string
  uuid: string
  username: string
  password: string
  nickName: string
  authorityId: string
  phone: string
  email: string
  github: string
  gitte: string
  avatar: string
  gender: number
  age: number
  userId: string
}

export interface PageResult<T> {
  list: T[]
  total: number
  page: number
  pageSize: number
}
