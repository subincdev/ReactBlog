import * as S from "./CategoryBtn.style";

const CategoryBtn = ({ categoryName, idx }) => {
  return <S.StyledDd key={idx}>{categoryName}</S.StyledDd>;
};

export default CategoryBtn;
