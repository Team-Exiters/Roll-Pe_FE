import { useQuery } from "@tanstack/react-query";
import { userIntroResponse } from "@/public/utils/types";
import { getUserRollpeList } from "@/public/lib/apis/rollpe.api";


export const useUserRollpeList = (queryParam: "invited" | "main" | "hot" | "my") => {
  return useQuery<userIntroResponse>({
    //쿼리키로 쿼리파람 지정 => invite, main... 여부에 따라 캐싱
    queryKey: ['rollpeList', queryParam],
    queryFn: () => getUserRollpeList(queryParam),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 1,
  },);
}; 