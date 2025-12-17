import { useQuery } from "@tanstack/react-query";
import { Rollpe, userIntroResponse } from "@/public/utils/types";
import { getUserRollpeList } from "@/public/lib/apis/rollpeUser.api";
import { RollpeReqeustQueryParam } from "@/public/utils/types";

// 메인페이지 최근 뜨고 있는 롤페 섹션용
export const useHotRollpeList = () => {
  return useQuery<Rollpe[]>({
    //쿼리키로 쿼리파람 지정 => invite, main... 여부에 따라 캐싱
    queryKey: ['HotRollpeList'],
    queryFn: () => getUserRollpeList("hot"),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 1,
  },);
}; 