import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { RollpeListProps } from "@/public/utils/types";
import { getRollpeList } from "@/public/lib/apis/rollpe.api";


export const useRollpeList = (queryParam: "invited" | "main" | "hot" | "my") => {
  return useInfiniteQuery<RollpeListProps, any>({
    queryKey: ["rollpeList", queryParam],
    queryFn: ({ pageParam = 1 }) => getRollpeList(queryParam, pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      //페이지 파라미터 분리
      return convertPageParam(lastPage);
    },
  });
};

const convertPageParam = (lastPage: RollpeListProps) => {
  const nextUrl = lastPage.next;

  if (!nextUrl) return undefined;

  const url = new URL(nextUrl);
  const page = url.searchParams.get("page");

  return page ? Number(page) : undefined;
}


