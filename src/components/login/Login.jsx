import React from "react";
import * as Styled from "./Login.style";

export default function Login() {
  return (
    <Styled.ContUl>
      <li class="profile-img">
        <Styled.StyledLink to="">
          <Styled.RoundImg src="./assets/profile.jpg" alt="My Page" />
        </Styled.StyledLink>
      </li>
      <li>
        <Styled.WriteBtn to="">
          <Styled.IconWhite />
          <Styled.WriteBtnTxt>Write</Styled.WriteBtnTxt>
        </Styled.WriteBtn>
      </li>
      <li>
        <Styled.LogoutBtn>
          <Styled.StyledLogoutBtn />
          <Styled.WriteBtnTxt>Logout</Styled.WriteBtnTxt>
        </Styled.LogoutBtn>
      </li>
    </Styled.ContUl>
  );
}
