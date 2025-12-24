"use server";
import { RollpeRequestBody } from "@/app/(layout_BL)/rollpe/create/_components/form/RollpeCreateForm";
import { axiosInstance, axiosInstanceAuth } from "@/public/axios/axiosInstance";
import { Rollpe, RollpeListProps } from "@/public/utils/types";
import { userIntroResponse, RollpeReqeustQueryParam } from "@/public/utils/types";


// 단순 개인화 롤페 리스트 (페이지네이션 적용)
const fetchInfiniteUserRollpeList = async (queryParam: RollpeReqeustQueryParam, page: number) => {
  return await axiosInstanceAuth.get(`/api/paper/mypage?page=${page}&type=${queryParam}`).then((response) => {
    return Promise.resolve(response.data.data);
  }).catch((error) => {
    return Promise.reject(error);
  });
}

// 단순 일반 롤페 리스트 호출 
const fetchUserRollpeList = async (queryParam: RollpeReqeustQueryParam) => {
  return await axiosInstanceAuth.get(`/api/paper/user?type=${queryParam}`).then((response) => {
    return Promise.resolve(response.data.data);
  }).catch((error) => {
    return Promise.reject(error);
  })

}

// 사용자 롤페 현황 호출
const fetchUserRollpeStatus = async () => {
  return await axiosInstanceAuth.get('/api/paper/mypage?type=main').then((response) => {
    return Promise.resolve(response.data.data);
  }).catch((error) => {
    return Promise.reject(error);
  })
}

// get 사용자 일반 롤페 리스트 호출 (내 롤페 / 초대받은 롤페 / 최근 뜨고 있는 롤페)
export async function getUserRollpeList(queryParam: RollpeReqeustQueryParam) {
  try {
    const response = await fetchUserRollpeList(queryParam);
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

// get 무한 스크롤 페이지네이션 롤페 호출 (초대 받은 롤페)
export async function getInfiniteUserRollpeList(queryParam: RollpeReqeustQueryParam, page: number): Promise<RollpeListProps> {
  try {
    const response = await fetchInfiniteUserRollpeList(queryParam, page);
    console.log(response);
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

// get 사용자 일반 롤페 현황 호출
export async function getUserRollpeStatus() {
  try {
    const response = await fetchUserRollpeStatus();
    return response;
  } catch (error) {
    if (error && typeof error === 'object' && 'response' in error) {
      const axiosError = error as any;
      const apiError = {
        message: axiosError.response?.data?.message || "사용자 롤페 현황을 불러오는데 실패했습니다",
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

//------------------------------------------------------------------------------


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

