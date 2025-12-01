"use server";
import { axiosInstance, axiosInstanceAuth } from "@/public/axios/axiosInstance";
import { HeartCreateRequestBody } from "@/public/utils/types";



export const postCreateHeart = async (data: HeartCreateRequestBody) => {
  return await axiosInstanceAuth.post('/api/heart', { ...data }).then((response) => {
    console.log(response);
    return Promise.resolve(response.data);
  }).catch((error) => {
    console.log(error);
    return Promise.reject(error.config);
  })

}

