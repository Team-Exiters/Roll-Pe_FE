"use client";
import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { kakaoLogin } from "@/public/utils/apis/kakao";
import { useDispatch } from "react-redux";
import { setUser } from "@/public/redux/slices/userSlice";

const KakaoAuthHandler = () => {
  const [code, setCode] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      new URL(window.location.href).searchParams.get("code") &&
        setCode(new URL(window.location.href).searchParams.get("code"));
    }
  }, []);

  useEffect(() => {
    if (code) {
      startTransition(async () => {
        kakaoLogin(code)
          .then((res) => {
            dispatch(
              setUser({
                id: res.user.id,
                name: res.user.name,
                email: res.user.email,
                identifyCode: res.user.identifyCode,
                provider: res.user.provider,
              })
            );
            setTimeout(() => {
              router.push("/main");
            }, 500);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      });
    }
  }, [code]);

  return null;
};

export default KakaoAuthHandler;
