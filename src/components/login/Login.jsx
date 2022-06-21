import React from "react";
import * as S from "./Login.style";

export default function Login() {
  return (
    <S.ContUl>
      <li class="profile-img">
        <S.StyledLink to="">
          <S.RoundImg src="./assets/profile.jpg" alt="My Page" />
        </S.StyledLink>
      </li>
      <li>
        <S.WriteBtn to="">
          <S.IconWhite />
          <S.WriteBtnTxt>Write</S.WriteBtnTxt>
        </S.WriteBtn>
      </li>
      <li>
        <S.LogoutBtn>
          <S.StyledLogoutBtn />
          <S.WriteBtnTxt>Logout</S.WriteBtnTxt>
        </S.LogoutBtn>
      </li>
    </S.ContUl>
  );
}
