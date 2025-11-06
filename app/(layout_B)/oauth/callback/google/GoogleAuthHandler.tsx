"use client";
import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "@/public/redux/slices/userSlice";
import { googleLogin } from "@/public/utils/apis/google";

const GoogleAuthHandler = () => {
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
        await googleLogin(code)
          .then((res) => {
            console.log(res);
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
            setTimeout(() => {
              alert("이미 다른 SNS로 가입된 이메일입니다.");
              router.push("/sign-in");
            }, 500);
          });
      });
    }
  }, [code]);

  return null;
};

export default GoogleAuthHandler;
