"use client";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";
import { GeneralSection } from "@/public/styles/styled-components/main/main.style";
import HotRollpeList from "@/app/_components/molecules/list/Hot/HotRollpeList";

import { Rollpe } from "@/public/utils/types";

// 최근 뜨고 있는 롤페 섹션
const RecentHotRollpeSection: React.FC<{ list: Rollpe[] }> = ({ list }) => {
  return (
    <RecentHotRollpeSectionWrapper>
      {/*리스트 */}
      <h1>지금 뜨고 있는 롤페</h1>
      <HotRollpeList hotRollpeList={list} />
    </RecentHotRollpeSectionWrapper>
  );
};

const RecentHotRollpeSectionWrapper = styled(GeneralSection)`
  align-items: flex-start;
  background-color: ${COLORS.ROLLPE_SECTION_BACKGROUND};

  & > h1 {
    font-family: var(--font-hakgyoansim);
    font-size: 1.5rem;
  }
`;

export default RecentHotRollpeSection;
