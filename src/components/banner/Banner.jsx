import React from "react";
import * as S from "./Banner.style";

export default function Banner() {
  return (
    <>
      <S.BannerDiv>
        <S.WrapDiv>
          <S.BannerContents>
            <S.Subtext>React Blog</S.Subtext>
            <S.Maintext>My BLOG</S.Maintext>
            <S.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              nostrum dolor provident beatae deserunt magnam, illo neque.
              Maiores ipsum commodi dolorum beatae aliquid laboriosam est
            </S.Description>
          </S.BannerContents>
        </S.WrapDiv>
      </S.BannerDiv>
    </>
  );
}
