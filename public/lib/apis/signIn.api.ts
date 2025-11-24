
"use server";
import { cookies } from "next/headers";
import axios from "axios";
import { axiosInstance } from "@/public/axios/axiosInstance";

export const signIn = async (email: string, password: string) => {
  return await axiosInstance.post("/api/user/signin", { email, password }).then((response) => {
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
    if (axios.isAxiosError(error) && error.response) {
      return Promise.reject(error.response.data.message);
    }
  });
};
