import {POST} from "@/src/service";

export const uploadFileApi = (data: FormData) => POST('/file/upload', data)
