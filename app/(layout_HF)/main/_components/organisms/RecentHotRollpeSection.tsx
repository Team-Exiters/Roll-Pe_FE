"use client";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";
import { GeneralSection } from "@/public/styles/styled-components/main/main.style";
import HotRollpeList from "./HotRollpeList";
import { useInfiniteRollpeList } from "@/public/lib/hooks/fetching/rollpe/useInfiniteRollpeList";
import { useRollpeList } from "@/public/lib/hooks/fetching/rollpe/useRollpeList";

// 최근 뜨고 있는 롤페 섹션
const RecentHotRollpeSection: React.FC = () => {
  const { data } = useRollpeList("hot");

  return (
    data && (
      <RecentHotRollpeSectionWrapper>
        <h1>지금 뜨고 있는 롤페</h1>
        {/*리스트 */}
        <HotRollpeList hotRollpeList={data} />
      </RecentHotRollpeSectionWrapper>
    )
  );
};

const RecentHotRollpeSectionWrapper = styled(GeneralSection)`
  align-items: flex-start;
  height: 100%;
  background-color: ${COLORS.ROLLPE_SECTION_BACKGROUND};

  & > h1 {
    font-size: 1.5rem;
  }
`;

export default RecentHotRollpeSection;
