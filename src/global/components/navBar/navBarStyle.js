import styled from "styled-components";

export const Tab = styled.span`
  font-weight: 450;
  user-select: none;
  cursor: pointer;
  padding: 6px;
  height: 100%;
  position: relative;
  color: ${({ isSelected }) => (isSelected ? "#000000" : "#767676")};
  &::after {
    content: "";
    width: 100%;
    border-bottom: 1px solid
      ${({ isSelected }) => (isSelected ? "#000000" : "transparent")};
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;
