import styled from "styled-components";
import { MaxWidth } from "../../App.style";

export const WrapMain = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 2.4rem;
  position: relative;
  width: 1224px;
  max-width: calc(100% - 4rem);
  margin: 0 auto;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Hidden = styled.h2`
  overflow: hidden;
  position: absolute;
  clip: rect(0, 0, 0, 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
`;
