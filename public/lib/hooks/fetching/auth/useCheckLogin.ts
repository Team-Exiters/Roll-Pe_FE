import { useSelector } from "react-redux";
import { RootState } from "@/public/redux/store";
import { useRouter } from "next/navigation";

export const useCheckLogin = () => {
  const user = useSelector((state: RootState) => state.simpleUser);
  const router = useRouter();

  if (!user.name) {
    alert("로그인이 필요한 페이지입니다.\n로그인 페이지로 이동합니다.");

    setTimeout(() => {
      router.push("/sign-in");
    }, 500);
  } else {
    return user;
  }
}