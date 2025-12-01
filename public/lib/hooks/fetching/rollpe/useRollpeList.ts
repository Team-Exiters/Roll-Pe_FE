import { useQuery } from "@tanstack/react-query";
import { Rollpe } from "@/public/utils/types";
import { getRollpeList } from "@/public/lib/apis/rollpe.api";


export const useRollpeList = (queryParam: "invited" | "main" | "hot" | "my") => {
  return useQuery<Rollpe[]>({
    queryKey: ['rollpeList', queryParam],
    queryFn: () => getRollpeList(queryParam),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 1,
  });
}; 