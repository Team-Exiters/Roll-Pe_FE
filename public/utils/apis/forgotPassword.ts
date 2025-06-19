"use server";
import { axiosInstance } from "@/public/axios/axiosInstance";

export const postForgotPassword = async (email: string): Promise<string> => {
  try {
    const response = await axiosInstance.post("/api/user/forgot-password", { email });
    return response.data.message;
  } catch (error) {
    throw error;
  }
};

export const patchChangePassword = async (identifyCode: string, newPassword: string): Promise<string> => {
  try {
    const response = await axiosInstance.patch("/api/user/forgot-password", { identifyCode, newPassword });
    return response.data.message;
  } catch (error) {
    throw error;
  }
};