import { HeaderDefault } from "../_components/molecules/ui/layouts/Header";
import Footer from "../_components/molecules/ui/layouts/Footer";

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
