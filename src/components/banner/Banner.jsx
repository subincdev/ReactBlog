import React from "react";
import * as S from "./Banner.style";

export default function Banner({ data }) {
  return (
    <>
      <S.BannerDiv>
        <S.WrapDiv>
          <S.BannerContents>
            <S.Subtext>{data.subTitle}</S.Subtext>
            <S.Maintext>{data.mainTitle}</S.Maintext>
            <S.Description>{data.description}</S.Description>
          </S.BannerContents>
        </S.WrapDiv>
      </S.BannerDiv>
    </>
  );
}
