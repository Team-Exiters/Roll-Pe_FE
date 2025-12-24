import styled from "styled-components";

export const HeaderWrapper = styled.header<{ left: boolean }>`
  position: absolute;
  top: 0;
  z-index: 2;

  display: flex;
  justify-content: ${(props) => (props.left ? "flex-start" : "flex-end")};
  width: calc(100% - 2.5rem);
  padding: 1rem 1.25rem;
  background: transparent;
`;

export const LogoHeaderWrapper = styled(HeaderWrapper)`
  align-items: center;
  justify-content: space-between;
`;

export const MenuButton = styled.button`
  all: unset;
  position: relative;
  width: 1.75rem;
  height: 1.75rem;
  cursor: pointer;
`;

export const BackButton = styled(MenuButton)`
  width: 0.75rem;
  height: 1.25rem;
`;

export const LogoButton = styled(MenuButton)`
  width: 3rem;
  height: 1.5rem;
`;
