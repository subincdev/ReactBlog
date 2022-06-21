import Logo from "../logo/Logo";
import Login from "../login/Login";
import * as Styled from "./Header.style";

export default function Header() {
  return (
    <Styled.HeaderColor>
      <Styled.WrapDiv>
        <Logo />
        <Login />
      </Styled.WrapDiv>
    </Styled.HeaderColor>
  );
}
