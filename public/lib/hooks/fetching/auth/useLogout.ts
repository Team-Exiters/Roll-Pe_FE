import { useMutation } from "@tanstack/react-query";
import { postLogout } from "@/public/lib/apis/logOut.api";
import { useRouter } from "next/navigation";
import { persistor } from "@/public/redux/store";

export const useLogout = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: () => postLogout(),
    onError: (err) => { alert(err.message) },
    onSuccess: (res) => {
      persistor.purge();
      alert("로그아웃 되었습니다.");

      setTimeout(() => {
        router.push("/");
      }, 500);
    },
  })
}