import React from "react";
import styled from "styled-components";
export default function Post(props) {
  const StyledUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.4rem;
    @media (max-width: 768px) {
      & {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 540px) {
      & {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  `;

  const StyledLink = styled.a`
    display: block;
    overflow: hidden;
    border-radius: var(--border-radius);
    background: var(--white-color);
    font-size: 2rem;
  `;

  const StyledImg = styled.img`
    width: 100%;
  `;

  const A11yhidden = styled.dt`
    overflow: hidden;
    position: absolute;
    clip: rect(0, 0, 0, 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
  `;

  const StyledContentsWrap = styled.div`
    padding: 1.6rem 2.4rem 2.4rem;
  `;

  const StyledCategory = styled.dl`
    display: flex;
    flex-wrap: wrap;
    color: var(--main-color);
  `;

  const StyledDd = styled.dd`
    margin-right: 0.4rem;
    padding: 0.2rem 1.2rem;
    border-radius: calc(var(--border-radius) * 2);
    background: var(--gray-background);
    font-size: 1.2rem;
  `;

  // const categoryDd = props.posts.category.map((categoryName, idx) => (
  //   <StyledDd key={idx}>{categoryName}</StyledDd>
  // ));
  // const categories = props.posts[0].category;
  // const categoryDd = categories.map((categoryName, idx) => (
  //   <StyledDd key={idx}>{categoryName}</StyledDd>
  // ));

  // const categoryDd = categories.map((categoryName, idx) => (
  //   <StyledDd key={idx}>{categoryName}</StyledDd>
  // ))
  const Styledh3 = styled.h3`
    height: calc(1.8rem * 1.4 * 2);
    margin: 1rem 0;
    font-size: 1.8rem;
    font-weight: bold;
    -webkit-line-clamp: 2;
    letter-spacing: -0.02em;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
  `;

  const PostDescription = styled.p`
    height: calc(1.4rem * 1.4 * 3);
    margin-top: 1.6rem;
    color: var(--gray-color);
    font-size: 1.4rem;
    -webkit-line-clamp: 3;
    text-indent: 0.5em;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
  `;

  const contents = props.posts[0].contents[0].text;
  const AuthorWrap = styled.dl`
    display: flex;
    gap: 1rem;
    color: #767676;
    font-size: 1.2rem;
  `;

  const AuthorWrapDd = styled.dd`
    display: flex;
    align-items: center;
    gap: 0.6rem;
  `;

  const AuthorImg = styled.img`
    width: 2em;
    height: 2em;
    border-radius: 50%;
  `;

  const postItem = props.posts.map((post, idx) => (
    <li key={idx}>
      <StyledLink href="#">
        <article>
          <StyledImg src={`${post.thumbnail}`} alt="" />
          <StyledContentsWrap>
            <StyledCategory>
              <A11yhidden>Category</A11yhidden>
              {/* {categoryDd} */}
            </StyledCategory>

            <Styledh3>{post.title}</Styledh3>

            <AuthorWrap>
              <A11yhidden>Author</A11yhidden>
              <AuthorWrapDd>
                <AuthorImg src={`${post.profileImg}`} alt="" />
                {props.userInfo[0].name}
              </AuthorWrapDd>
              <A11yhidden>Created</A11yhidden>
              <AuthorWrapDd>2022.05.25</AuthorWrapDd>
            </AuthorWrap>

            <PostDescription>{`${contents}`}</PostDescription>
          </StyledContentsWrap>
        </article>
      </StyledLink>
    </li>
  ));
  return <StyledUl>{postItem}</StyledUl>;
}
