import { GET, POST, PUT, DELETE } from "@/src/service";
import { PageParams } from "@/src/tb.types";
import type { AddSharingParam } from "containers/Sharing/types";

export const getSharingListApi = (data: PageParams) => GET('/base/article/list', data)
export const addSharingApi = (data: AddSharingParam) => POST('/article/add', data)
export const updateSharingApi = (data: any) => PUT('/article/update', data)
export const deleteSharingApi = (id: string) => DELETE('/article/delete', { id })
