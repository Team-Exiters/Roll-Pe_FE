import HeaderBLH from "../_components/molecules/ui/layouts/headers/HeaderBLH";

//layout_BLH : Back + Logo + Hamburger
export default function BackLogoHamburgerLayout({
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
