"use client";

import Loading from "@/app/_components/molecules/ui/loading/Loading";
import KakaoAuthHandler from "./KakaoAuthHandler";

const KakaoRedirectPage: React.FC = () => {
  return (
    <>
      <Loading />
      <KakaoAuthHandler />
    </>
  );
};

export default KakaoRedirectPage;
