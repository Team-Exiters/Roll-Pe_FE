import HeaderBLH from "@/app/_components/molecules/ui/layouts/headers/HeaderBLH";

//layout_HF : Header + Footer
export default function LogoMenuHeaderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderBLH />
      {children}
    </>
  );
}
