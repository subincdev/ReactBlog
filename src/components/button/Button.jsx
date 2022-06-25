import React from "react";
import * as S from "./Button.style";

export default function Button() {
  const buttonList = [
    "Life",
    "Style",
    "Tech",
    "Sport",
    "Photo",
    "Develop",
    "Music",
  ];
  const listItem = buttonList.map((btn, idx) => (
    <li key={idx}>
      <S.BtnCategories to="/">{btn}</S.BtnCategories>
    </li>
  ));
  return <S.CategoriesUl>{listItem}</S.CategoriesUl>;
}
