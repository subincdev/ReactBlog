import React from "react";
import FacebookImg from "../../assets/Facebook.svg";
import TwitterImg from "../../assets/Twitter.svg";
import InstagramImg from "../../assets/Instagram.svg";
import GitHubImg from "../../assets/Github.svg";
import * as S from "./SnsButton.style";
export default function SnsButton() {
  const imgList = [
    { imgsrc: FacebookImg, src: "https://www.facebook.com/" },
    { imgsrc: TwitterImg, src: "https://twitter.com/home" },
    { imgsrc: InstagramImg, src: "https://www.instagram.com/" },
    { imgsrc: GitHubImg, src: "https://github.com/" },
  ];

  const imgListItem = imgList.map(({ imgsrc, src }, idx) => (
    <li key={idx}>
      <a href={src}>
        <S.ImgComponent src={imgsrc} />
      </a>
    </li>
  ));

  return <S.StyledUl>{imgListItem}</S.StyledUl>;
}
