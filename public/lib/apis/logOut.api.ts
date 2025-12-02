"use server";
import { axiosInstanceAuth } from "@/public/axios/axiosInstance";
import { ApiError } from "@/public/utils/types";
import { cookies } from "next/headers";

export async function postLogout() {
  try {
    const response = await callLogOut();
    removeCookies();
    return response;

  } catch (error) {

    if (error && typeof error === 'object' && 'response' in error) {
      const axiosError = error as any;
      const apiError = {
        message: axiosError.response?.data?.message || "로그아웃에 실패했습니다",
        code: axiosError.response?.data?.code,
        statusCode: axiosError.response?.status,
      };
      throw apiError;
    }
    throw {
      message: "네트워크 오류가 발생했습니다",
      statusCode: 0,
    } as ApiError

  }
}


async function callLogOut() {
  const refreshToken = cookies().get("refreshToken");
  if (refreshToken) {
    const response = await axiosInstanceAuth.post("/api/user/logout", { refresh: refreshToken.value });
    return response.data
  }
}


function removeCookies() {
  cookies().set("accessToken", "");
  cookies().set("refreshToken", "");
}

