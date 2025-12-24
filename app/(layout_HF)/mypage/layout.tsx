import Footer from "@/app/_components/molecules/ui/layouts/Footer";
import HeaderDefault from "@/app/_components/molecules/ui/layouts/headers/HeaderDefault";

//layout_HF : Header + Footer
export default function LogoMenuHeaderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderDefault />
      {children}
      <Footer />
    </>
  );
}
