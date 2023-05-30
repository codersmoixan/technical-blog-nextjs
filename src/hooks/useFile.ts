import {uploadFileApi} from "containers/App/api";

const useFile = () => {
  const uploadFile = async (files: File[]) => {
    const formData = new FormData();
    formData.append('file', files[0]);
    const res = await uploadFileApi(formData)

    return res.data.file
  }

  return {
    uploadFile
  }
}

export default useFile
