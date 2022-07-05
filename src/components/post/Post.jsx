import React from "react";
import CategoryBtn from "../categoryBtn/CategoryBtn";
import * as S from "./Post.style";
export default function Post(props) {
  const Card = props.posts
    .slice(0)
    .reverse()
    .map((post, idx) => (
      <li key={idx}>
        <S.StyledLink to={`/postDetail/${idx}`}>
          <article>
            <S.StyledImg src={`${post.thumbnail}`} alt="" />
            <S.StyledContentsWrap>
              <S.StyledCategory>
                <S.A11yhidden>Category</S.A11yhidden>
                {post.category.map((categoryName, idx) => (
                  <CategoryBtn
                    key={idx}
                    categoryName={categoryName}
                    idx={idx}
                  />
                ))}
              </S.StyledCategory>

              <S.Styledh3>{post.title}</S.Styledh3>
              <S.AuthorWrap>
                <S.A11yhidden>Author</S.A11yhidden>
                <S.AuthorWrapDd>
                  <S.AuthorImg src={`${post.profileImg}`} alt="" />
                  {post.userName}
                </S.AuthorWrapDd>
                <S.A11yhidden>Created</S.A11yhidden>
                <S.AuthorWrapDd>{post.created}</S.AuthorWrapDd>
              </S.AuthorWrap>
              <S.PostDescription>{`${post.contents[0].text}`}</S.PostDescription>
            </S.StyledContentsWrap>
          </article>
        </S.StyledLink>
      </li>
    ));
  return <S.StyledUl>{Card}</S.StyledUl>;
}
