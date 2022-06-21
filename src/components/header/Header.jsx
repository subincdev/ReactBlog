import Logo from "../logo/Logo";
import Login from "../login/Login";
import * as S from "./Header.style";

export default function Header() {
  return (
    <S.HeaderColor>
      <S.WrapDiv>
        <Logo />
        <Login />
      </S.WrapDiv>
    </S.HeaderColor>
  );
}
