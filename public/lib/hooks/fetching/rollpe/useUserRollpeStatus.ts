import { useQuery } from "@tanstack/react-query";
import { userIntroResponse } from "@/public/utils/types";
import { getUserRollpeStatus } from "@/public/lib/apis/rollpeUser.api";

//일반 사용자 롤페 현황 호출
export const useUserRollpeStatus = () => {
  return useQuery<userIntroResponse>({
    //쿼리키로 쿼리파람 지정 => invite, main... 여부에 따라 캐싱
    queryKey: ['userRollpeStatus'],
    queryFn: () => getUserRollpeStatus(),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 1,
  },);
}; 