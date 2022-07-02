import React from "react";
import Button from "../button/Button";
import SnsButton from "../snsButton/SnsButton";
import * as S from "./Aside.style";
export default function Aside({ userInfo }) {
  return (
    <>
      <S.WrapAbout>
        <S.H2TitleAbout>About Me</S.H2TitleAbout>
        <S.UserProfile src="./assets/profile.jpg" alt="" />
        <S.UserName>{userInfo[0].name}</S.UserName>
        <S.UserDescription>{userInfo[0].userInfo}</S.UserDescription>
        <S.H3SubTitleAbout>Categories</S.H3SubTitleAbout>
        <Button categories={userInfo[0].category} />
        <S.H3SubTitleAbout>Follow</S.H3SubTitleAbout>
        <SnsButton snsBtn={userInfo[0].sns} />
      </S.WrapAbout>
    </>
  );
}
