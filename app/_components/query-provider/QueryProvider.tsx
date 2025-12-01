"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

export default function QueryProvider({ children }: { children: ReactNode }) {
  // useState로 QueryClient 생성 - 매 렌더링마다 새로 생성되는 것을 방지
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // SSR에서 클라이언트로 데이터를 전송하는 동안 즉시 refetch하지 않도록
            staleTime: 60 * 1000, // 1분
            retry: 1, // 실패 시 1번만 재시도
          },
          mutations: {
            retry: 0, // mutation은 재시도 안 함
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
