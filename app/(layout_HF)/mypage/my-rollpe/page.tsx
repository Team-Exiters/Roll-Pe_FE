import { RollpeList } from "@/app/_components/molecules/list/RollpeList";
import {
  MyRollpeWrapper,
  MyRollpeContainer,
} from "../_components/styles/InvitedRollpeStyles";

const MyRollpePage: React.FC = () => {
  return (
    <MyRollpeWrapper>
      <MyRollpeContainer>
        <div className={"title-wrapper"}>
          <h1>내 롤페</h1>
        </div>
        <RollpeList type={"my"} />
      </MyRollpeContainer>
    </MyRollpeWrapper>
  );
};

export default MyRollpePage;
