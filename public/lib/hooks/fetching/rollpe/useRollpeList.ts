import { useQuery } from "@tanstack/react-query";
import { RollpeListProps } from "@/public/utils/types";
import { getRollpeList } from "@/public/lib/apis/rollpe.api";

export const useRollpeList = (queryParam: "invited" | "main" | "hot" | "my") => {
  return useQuery<RollpeListProps>({
    queryKey: ["rollpeList", queryParam],
    queryFn: () => getRollpeList(queryParam, 1),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 1,
  })
}