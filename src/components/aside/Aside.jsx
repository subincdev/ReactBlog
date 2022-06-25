import React from "react";
import Button from "../button/Button";
import SnsButton from "../snsButton/SnsButton";
import * as S from "./Aside.style";
export default function Aside() {
  return (
    <>
      <S.WrapAbout>
        <S.H2TitleAbout>About Me</S.H2TitleAbout>
        <S.UserProfile src="./assets/profile.jpg" alt="" />
        <S.UserName>Chilli</S.UserName>
        <S.UserDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </S.UserDescription>
        <S.H3SubTitleAbout>Categories</S.H3SubTitleAbout>
        <Button />
        <S.H3SubTitleAbout>Follow</S.H3SubTitleAbout>
        <SnsButton />
      </S.WrapAbout>
    </>
  );
}
