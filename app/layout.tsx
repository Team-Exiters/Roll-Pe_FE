import type { Metadata } from "next";
import "./globals.css";
import { COLORS } from "@/public/styles/colors";
import StyledComponentsRegistry from "@/public/lib/registry";
import {
  pretendard,
  hakgyoansim,
  dunggeunmo,
  jalnangothic,
  nanumpen,
  nanummyeongjo,
} from "@/public/fonts/fonts";
import ReduxProvider from "./_components/redux-provider/ReduxProvider";
// import SlideMenu from "./_components/ui/layouts/SlideMenu";

export const metadata: Metadata = {
  title: "롤페 | Roll-Pe",
  description: "모두의 마음을 모아 사랑하는 사람에게 전달해보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${hakgyoansim.variable} ${pretendard.variable} ${dunggeunmo.variable} ${jalnangothic.variable} ${nanumpen.variable} ${nanummyeongjo.variable}`}
    >
      <body>
        <ReduxProvider>
          <StyledComponentsRegistry>
            <main
              style={{
                position: "fixed",
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                width: "100%",
                maxWidth: "768px",
                height: "100%",
                // maxHeight: "100svh",
                border: `1px solid ${COLORS.ROLLPE_GRAY}`,
                overflowX: "hidden",
                overflowY: "auto",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <div
                style={{
                  flex: "1",
                  width: "100%",
                  height: "100%",
                  position: "relative",
                }}
              >
                {children}
              </div>
            </main>
          </StyledComponentsRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
