import type { Metadata } from "next";
import { HeaderBack } from "../_components/ui/layouts/Header";

export const metadata: Metadata = {
  title: "롤페 | Roll-Pe",
  description: "모두의 마음을 모아 사랑하는 사람에게 전달해보세요.",
};

export default function BackHeaderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderBack />
      {children}
    </>
  );
}
