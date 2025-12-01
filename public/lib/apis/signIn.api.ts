
"use server";
import { cookies } from "next/headers";
import axios from "axios";
import { axiosInstance } from "@/public/axios/axiosInstance";
import { SignInRequest, SignInResponse, ApiError } from "@/public/utils/types";

async function callSignInAPI(request: SignInRequest): Promise<SignInResponse> {
  const response = await axiosInstance.post<{ data: SignInResponse }>(
    "/api/user/signin",
    request
  );
  return response.data.data;
}

function setAuthCookies(accessToken: string, refreshToken: string): void {
  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
  };

  cookies().set("accessToken", accessToken, cookieOptions);
  cookies().set("refreshToken", refreshToken, cookieOptions);
}


export async function postSignIn(
  request: SignInRequest
): Promise<SignInResponse> {
  try {
    const response = await callSignInAPI(request);
    setAuthCookies(response.access, response.refresh);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const apiError: ApiError = {
        message: error.response?.data?.message || "로그인에 실패했습니다",
        code: error.response?.data?.code,
        statusCode: error.response?.status,
      };
      throw apiError;
    }
    throw {
      message: "네트워크 오류가 발생했습니다",
      statusCode: 0,
    } as ApiError;
  }
}