import Footer from "../_components/molecules/ui/layouts/Footer";
import HeaderDefault from "../_components/molecules/ui/layouts/headers/HeaderDefault";

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
