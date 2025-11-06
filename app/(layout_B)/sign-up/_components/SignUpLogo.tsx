"use client";
import Image from "next/image";
import Logo from "@/public/images/logos/logo.korean.png";

const SignUpLogo: React.FC = () => {
  return (
    <>
      <Image
        src={Logo}
        alt={"롤페 로고"}
        layout="responsive"
        width={104}
        height={52}
      />
    </>
  );
};

export default SignUpLogo;
