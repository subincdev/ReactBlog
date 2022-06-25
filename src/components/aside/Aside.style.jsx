import styled from "styled-components";

export const WrapAbout = styled.aside`
  flex-basis: calc((100% - 2.4rem * 3) / 4);
  flex-shrink: 0;
  align-self: flex-start;
  padding: 4rem 2.4rem 7rem;
  box-sizing: border-box;
  border-radius: var(--border-radius);
  background: var(--white-color);
  text-align: center;
  font-size: 2rem;
`;

export const H2TitleAbout = styled.h2`
  margin-bottom: 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: underline;
  letter-spacing: 0.1em;
`;
export const H3SubTitleAbout = styled(H2TitleAbout)`
  margin-top: 6rem;
`;

export const UserProfile = styled.img`
  width: 8rem;
  height: 8rem;
  object-fit: cover;
  border-radius: 50%;
`;
export const UserName = styled.p`
  color: var(--main-color);
  font-weight: bold;
  font-size: 1.6rem;
  margin: 1.2rem 0 0.8rem;
`;

export const UserDescription = styled.p`
  font-size: 1.4rem;
  padding: 0 0.4rem;
`;
