"use server";
import { cookies } from "next/headers";
import { axiosInstance } from "@/public/axios/axiosInstance";

export const kakaoLogin = async (code: string) => {
  return await axiosInstance.post("/api/user/social/login/kakao", { code: code }).then((response) => {
    if (response.data.data) {
      cookies().set("accessToken", response.data.data.access, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
      });

      cookies().set("refreshToken", response.data.data.refresh, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
      });
    }
    return Promise.resolve(response.data.data);
  }).catch((error) => {
    return Promise.reject(error);
  });
}
