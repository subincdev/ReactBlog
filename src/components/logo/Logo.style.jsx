import { ReactComponent as LogoImg } from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
export const StyledLink = styled(Link)`
  display: block;
  padding: 0.4rem;
  margin-left: -0.4rem;
`;

export const StyledImg = styled(LogoImg)`
  display: block;
`;

export const StyledH1 = styled.h1`
  font-size: 3rem;
`;
