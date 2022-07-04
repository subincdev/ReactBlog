import styled from "styled-components";
import { Link } from "react-router-dom";
export const StyledUl = styled.ul`
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

export const StyledLink = styled(Link)`
  display: block;
  overflow: hidden;
  border-radius: var(--border-radius);
  background: var(--white-color);
  font-size: 2rem;
`;

export const StyledImg = styled.img`
  width: 100%;
`;

export const A11yhidden = styled.dt`
  overflow: hidden;
  position: absolute;
  clip: rect(0, 0, 0, 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
`;

export const StyledContentsWrap = styled.div`
  padding: 1.6rem 2.4rem 2.4rem;
`;

export const StyledCategory = styled.dl`
  display: flex;
  flex-wrap: wrap;
  color: var(--main-color);
`;

export const Styledh3 = styled.h3`
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

export const PostDescription = styled.p`
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

export const AuthorWrap = styled.dl`
  display: flex;
  gap: 1rem;
  color: #767676;
  font-size: 1.2rem;
`;

export const AuthorWrapDd = styled.dd`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const AuthorImg = styled.img`
  width: 2em;
  height: 2em;
  border-radius: 50%;
`;
