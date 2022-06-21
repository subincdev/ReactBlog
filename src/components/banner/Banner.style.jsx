import styled from "styled-components";
import BackgroundImg from "../../assets/background.jpg";

export const BannerDiv = styled.div`
  position: relative;
  background: url(${BackgroundImg}) no-repeat 50% 50% / cover;
  height: 27em;
  margin-bottom: -7em;
`;

export const WrapDiv = styled.div`
  width: 1224px;
  max-width: calc(100% - 4rem);
  margin: 0 auto;
`;

export const BannerContents = styled.div`
  width: 28rem;
  padding: 7rem 0 14.5rem;
  text-align: center;
  color: var(--gray-background-light);
  @media (max-width: 768px) {
    margin: 0 auto;
    width: 100%;
  }
  &::before {
    @media (max-width: 1280px) {
      width: 44rem;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc((100% - 1224px) / 2 + 44rem);
    height: 100%;
    background: rgba(40, 48, 63, 0.5);
  }
  & > * {
    position: relative;
  }
`;

export const Subtext = styled.p`
  border: 1px solid rgba(249, 249, 249, 0.3);
  border-width: 1px 0;
  padding: 1rem 0 0.8rem;
  font-size: 2rem;
  letter-spacing: 0.2em;
`;

export const Maintext = styled.p`
  font-weight: bold;
  font-size: 5.4rem;
  margin: 1.6rem 0;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  text-align: left;
  word-break: break-all;
  padding: 0 0.8rem;
`;
