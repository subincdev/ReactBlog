import { ReactComponent as IconModifyWhite } from "../../assets/icon-modify-white.svg";
import { ReactComponent as IconLogout } from "../../assets/icon-logout.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
export const ContUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const StyledLink = styled(Link)`
  width: 4.4rem;
  height: 4.4rem;
  display: block;
  border-radius: 50%;
`;

export const RoundImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const WriteBtn = styled(Link)`
  @media (max-width: 640px) {
    width: 4.4rem;
    height: 4.4rem;
    padding: 0;
    border-radius: 50%;
  }
  text-transform: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  height: 4rem;
  padding: 0.2rem 1.2em 0;
  border: 0;
  background: var(--main-color);
  color: var(--white-color);
  font-weight: bold;
  line-height: 1;
`;

export const WriteBtnTxt = styled.span`
  @media (max-width: 640px) {
    overflow: hidden;
    position: absolute;
    clip: rect(0, 0, 0, 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
  }
`;

export const LogoutBtn = styled.button`
  padding: 0.2rem 0.8em 0;
  background: var(--white-color);
  color: var(--black-color);
  text-transform: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  height: 4rem;
  border: 0;
  border-radius: var(--border-radius);
  font-weight: bold;
  line-height: 1;
  @media (max-width: 640px) {
    width: 4.4rem;
    height: 4.4rem;
    border-radius: 50%;
  }
`;

export const StyledLogoutBtn = styled(IconLogout)`
  height: 1.4em;
  margin-top: -0.2rem;
  vertical-align: middle;
`;

export const IconWhite = styled(IconModifyWhite)`
  height: 1.2em;
  margin-top: -0.2rem;
  vertical-align: middle;
`;
