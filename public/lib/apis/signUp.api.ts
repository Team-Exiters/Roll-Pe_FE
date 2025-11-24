"use server";
import { axiosInstance } from "@/public/axios/axiosInstance";

interface SignUpInputs {
  name: string;
  email: string;
  password: string;
  sex?: boolean;
  birth?: string;
  phoneNumber?: string;
}

export const signUp = async (requestBody: SignUpInputs) => {
  return await axiosInstance.post("/api/user/signup", { ...requestBody }).then((response) => {
    return Promise.resolve(response.data);
  }).catch((error) => {
    return Promise.reject(error);
  });
}