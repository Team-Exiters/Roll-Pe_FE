import {
  InfiniteRollpeList,
  RollpeList,
} from "@/app/_components/molecules/list/RollpeList";
import {
  MyRollpeWrapper,
  MyRollpeContainer,
} from "../_components/styles/InvitedRollpeStyles";
import localFont from "next/font/local";

const hakgyoansim = localFont({
  src: "../../../../public/fonts/HakgyoansimR.woff2",
  weight: "400",
  display: "swap",
});

const MyRollpePage: React.FC = () => {
  return (
    <MyRollpeWrapper className={hakgyoansim.className}>
      <MyRollpeContainer>
        <div className={"title-wrapper"}>
          <h1>내 롤페</h1>
        </div>
        <InfiniteRollpeList type="host" />
      </MyRollpeContainer>
    </MyRollpeWrapper>
  );
};

export default MyRollpePage;
