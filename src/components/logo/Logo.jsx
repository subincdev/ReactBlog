import { BrowserRouter, Route } from "react-router-dom";
import Index from "../../pages/Index";
import * as Styled from "./Logo.style";
export default function Logo() {
  return (
    <Styled.StyledH1>
      <BrowserRouter>
        <Styled.StyledLink to="/home">
          <Styled.StyledImg />
        </Styled.StyledLink>
        <Route path="/home" exact component={Index} />
      </BrowserRouter>
    </Styled.StyledH1>
  );
}
