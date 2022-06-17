import { ReactComponent as LogoImg } from "../assets/Logo.svg";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Index from "../pages/Index";
import styled from "styled-components";
const StyledLink = styled(Link)`
  display: block;
  padding: 0.4rem;
  margin-left: -0.4rem;
`;

const StyledImg = styled(LogoImg)`
  display: block;
`;
export default function Logo() {
  return (
    <h1>
      <BrowserRouter>
        <StyledLink to="/home">
          <StyledImg />
        </StyledLink>
        <Route path="/home" exact component={Index} />
      </BrowserRouter>
    </h1>
  );
}
