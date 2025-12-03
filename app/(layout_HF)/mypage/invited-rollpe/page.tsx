import { InfiniteRollpeList } from "@/app/_components/molecules/list/RollpeList";
import localFont from "next/font/local";
import {
  MyRollpeWrapper,
  MyRollpeContainer,
} from "../_components/styles/InvitedRollpeStyles";

const hakgyoansim = localFont({
  src: "../../../../public/fonts/HakgyoansimR.woff2",
  weight: "400",
  display: "swap",
});

const InvitedRollpePage: React.FC = () => {
  return (
    <MyRollpeWrapper className={hakgyoansim.className}>
      <MyRollpeContainer>
        <div className={"title-wrapper"}>
          <h1>초대받은 롤페</h1>
        </div>
        <InfiniteRollpeList type={"inviting"} />
      </MyRollpeContainer>
    </MyRollpeWrapper>
  );
};

export default InvitedRollpePage;
