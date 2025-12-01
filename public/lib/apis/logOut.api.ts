"use server";
import { axiosInstanceAuth } from "@/public/axios/axiosInstance";
import { cookies } from "next/headers";

export const logOutOk = async () => {
  const refreshToken = cookies().get("refreshToken");

  if (refreshToken) {
    return await axiosInstanceAuth.post("/api/user/logout", { refresh: refreshToken.value }).then((res) => {
      cookies().set("accessToken", "");
      cookies().set("refreshToken", "");

      return Promise.resolve(res.data.message);
    }).catch((error) => {
      return Promise.reject(error);
    });
  }
}
