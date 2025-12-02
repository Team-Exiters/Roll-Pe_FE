"use server";
import { RollpeRequestBody } from "@/app/(layout_BL)/rollpe/create/_components/form/RollpeCreateForm";
import { axiosInstance, axiosInstanceAuth } from "@/public/axios/axiosInstance";
import { Rollpe, RollpeListProps } from "@/public/utils/types";
import { userIntroResponse } from "@/public/utils/types";

// 단순 롤페 리스트
const callRollpeList = async (queryParam: "invited" | "main" | "hot" | "my", page: number) => {
  const response = await axiosInstanceAuth.get(`/api/paper/user?page=${page}&type=${queryParam}`);
  return response.data.data;
}

// 단순 사용자 롤페 리스트
const callUserRollpeList = async (queryParam: "invited" | "main" | "hot" | "my") => {
  return await axiosInstanceAuth.get(`/api/paper/mypage?page=&type=${queryParam}`).then((response) => {
    console.log(response.data);
    return Promise.resolve(response.data.data);
  }).catch((error) => {
    return Promise.reject(error);
  });
}

// 단순 롤페 리스트 함수
export async function getRollpeList(queryParam: "invited" | "main" | "hot" | "my", page: number): Promise<RollpeListProps> {
  try {
    const response = await callRollpeList(queryParam, page);
    return response;
  } catch (error) {
    if (error && typeof error === 'object' && 'response' in error) {
      const axiosError = error as any;
      const apiError = {
        message: axiosError.response?.data?.message || "롤페 리스트를 불러오는데 실패했습니다",
        code: axiosError.response?.data?.code,
        statusCode: axiosError.response?.status,
      };
      throw apiError;
    }
    throw {
      message: "네트워크 오류가 발생했습니다",
      statusCode: 0,
    };
  }
}

// 사용자 롤페 리스트 호출 함수
export async function getUserRollpeList(queryParam: "invited" | "main" | "hot" | "my"): Promise<userIntroResponse> {
  try {
    const response = await callUserRollpeList(queryParam);
    return response;
  } catch (error) {
    if (error && typeof error === 'object' && 'response' in error) {
      const axiosError = error as any;
      const apiError = {
        message: axiosError.response?.data?.message || "사용자 롤페 리스트를 불러오는데 실패했습니다",
        code: axiosError.response?.data?.code,
        statusCode: axiosError.response?.status,
      };
      throw apiError;
    }
    throw {
      message: "네트워크 오류가 발생했습니다",
      statusCode: 0,
    };
  }
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
    return Promise.resolve(response.data);
  }).catch((error) => {
    console.error(error.config);
    return Promise.reject(error.response);
  })
}

export const getRollpeDetail = async (pcode: string) => {
  return await axiosInstanceAuth.get(`/api/paper?pcode=${pcode}`).then((response) => {
    // console.log(response.data);
    return Promise.resolve(response.data);
  }).catch((error) => {
    return Promise.reject(error);
  })
}

export const getSearchRollpeList = async (searchText: string) => {
  return await axiosInstanceAuth.get(`/api/engine/serach?k=${searchText}`).then((response) => {
    if (response) {
      return Promise.resolve(response.data.data);
    } else {
      throw new Error("검색 결과가 없습니다.");
    }

  }).catch((error) => {
    return Promise.reject(error);
  })
}

