import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "@/public/lib/registry";
import ReduxProvider from "./_components/redux-provider/ReduxProvider";
import localFont from "next/font/local";
// import SlideMenu from "./_components/ui/layouts/SlideMenu";

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
});

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
    <html lang="ko" className={pretendard.variable}>
      <head></head>
      <body>
        <ReduxProvider>
          <StyledComponentsRegistry>
            <main className="main-container">
              <div className="main-wrapper">{children}</div>
            </main>
          </StyledComponentsRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
