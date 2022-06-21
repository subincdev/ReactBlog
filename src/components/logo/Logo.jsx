import { BrowserRouter, Route } from "react-router-dom";
import Index from "../../pages/Index";
import * as S from "./Logo.style";
export default function Logo() {
  return (
    <S.StyledH1>
      <BrowserRouter>
        <S.StyledLink to="/home">
          <S.StyledImg />
        </S.StyledLink>
        <Route path="/home" exact component={Index} />
      </BrowserRouter>
    </S.StyledH1>
  );
}
