import SignIn from "./_components/SignIn";
import localFont from "next/font/local";

const hakgyoansim = localFont({
  src: "../../../public/fonts/HakgyoansimR.woff2",
  weight: "400",
  display: "swap",
});

const SignInPage: React.FC = () => {
  return (
    <main className={hakgyoansim.className}>
      <SignIn />
    </main>
  );
};

export default SignInPage;
