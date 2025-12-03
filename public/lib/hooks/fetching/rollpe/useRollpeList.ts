import { useQuery } from "@tanstack/react-query";
import { RollpeListProps, queryParam } from "@/public/utils/types";
import { getRollpeList } from "@/public/lib/apis/rollpe.api";

// "message": "Query Param type은 main, my, host, inviting이 존재합니다.",
export const useRollpeList = (queryParam: queryParam) => {
  return useQuery<RollpeListProps>({
    queryKey: ["rollpeList", queryParam],
    queryFn: () => getRollpeList(queryParam, 1),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 1,
  })
}