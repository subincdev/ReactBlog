import React from "react";
import * as S from "./SnsButton.style";

export default function SnsButton({ snsBtn }) {
  const keys = Object.keys(snsBtn);
  const imgListItem = keys.map((name, idx) => (
    <li key={idx}>
      <a href={snsBtn[name]}>
        <S.ImgComponent src={`../../assets/${name}.svg`} />
      </a>
    </li>
  ));
  return <S.StyledUl>{imgListItem}</S.StyledUl>;
}
