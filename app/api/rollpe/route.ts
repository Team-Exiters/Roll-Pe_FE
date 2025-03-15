"use server";
import { RollpeRequestBody } from "@/app/(logoHeaderRoute)/rollpe/create/_components/form/RollpeCreateForm";
import { axiosInstance, axiosInstanceAuth } from "@/public/axios/axiosInstance";

export const getHotRollpeList = async () => {
  try {
    const response = await axiosInstance.get(`/api/paper/user?type=hot`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }

}


export const getUserRollpe = async (queryParam: "my" | "main" | "inviting") => {
  return await axiosInstanceAuth.get(`/api/paper/mypage?type=${queryParam}`).then((res) => {
    return Promise.resolve(res.data.data);
  }).catch((error) => {
    return Promise.reject(error);
  });
}

export const getRollpeCreateDetail = async (type: "all" | "theme" | "size" | "ratio") => {
  return await axiosInstance.get(`/api/index?type=${type}`).then((response) => {
    return Promise.resolve(response.data);
  }).catch((error) => {
    return Promise.reject(error.response);
  })
}

export const postCreateRollpe = async (data: RollpeRequestBody) => {
  return await axiosInstanceAuth.post('/api/paper', { ...data }).then((response) => {
    console.log("실행한드아아아아");
    console.log(data);
    return Promise.resolve(response.data);
  }).catch((error) => {
    console.error(error.config);
    return Promise.reject(error.response);
  })
}

export const getRollpeDetail = async (pcode: string) => {
  return await axiosInstanceAuth.get(`/api/paper?pcode=${pcode}`).then((response) => {
    return Promise.resolve(response.data);
  }).catch((error) => {
    return Promise.reject(error);
  })
}

export const getSearchRollpeList = async (searchText: string) => {
  return await axiosInstanceAuth.get(`/api/engine/serach?k=${searchText}`).then((response) => {
    if (response) {
      console.log(response.data.data);
      return Promise.resolve(response.data.data);
    } else {
      throw new Error("검색 결과가 없습니다.");
    }

  }).catch((error) => {
    console.log(error);
    return Promise.reject(error);
  })
}