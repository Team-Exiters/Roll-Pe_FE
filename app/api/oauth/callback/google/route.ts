"use server";
import { cookies } from "next/headers";
import { axiosInstance } from "@/public/axios/axiosInstance";

export const googleLogin = async (code: string) => {
  return await axiosInstance.post("/user/social/login/google", { code: code }).then((response) => {
    console.log(response.data);
    if (response.data.data && response.data.data) {

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
    return Promise.resolve(response.data);
  }).catch((error) => {
    console.log(error.response);
    return Promise.reject(error);
  });
}