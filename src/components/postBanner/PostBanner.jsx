import React from "react";
import styled from "styled-components";
export default function PostBanner({ month, date, day, thumbnail }) {
  console.log(thumbnail);
  const BannerWrap = styled.div`
    position: relative;
    background: url(${thumbnail}) no-repeat 50% 50% / cover;
    height: 27em;
    margin-bottom: -7em;
  `;

  const MaxWidth = styled.div`
    width: 1224px;
    max-width: calc(100% - 4rem);
    margin: 0 auto;
  `;

  const BannerContents = styled.div`
    width: 28rem;
    padding: 7rem 0 14.5rem;
    text-align: center;
    color: var(--gray-background-light);
    @media (max-width: 768px) {
      margin: 0 auto;
      width: 100%;
    }
    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: calc((100% - 1224px) / 2 + 44rem);
      height: 100%;
      background: rgba(40, 48, 63, 0.5);
      @media (max-width: 1280px) {
        width: 44rem;
      }
      @media (max-width: 768px) {
        margin: 0 auto;
        width: 100%;
      }
    }
  `;
  const Today = styled.p`
    padding-left: 0.8em;
    font-size: 5rem;
    font-weight: bold;
    text-align: left;
    line-height: 1.1;
    position: relative;

    @media (max-width: 1260px) {
      font-size: 3rem;
      padding-left: 0.2em;
    }
    @media (max-width: 768px) {
      text-align: center;
      padding-left: 0;
    }
  `;
  const Em = styled.em`
    display: block;
    font-size: 2em;
    margin-bottom: -0.15em;
    @media (max-width: 1260px) {
      display: inline;
      font-size: 1.4em;
    }
  `;
  return (
    <BannerWrap>
      <MaxWidth>
        <BannerContents>
          <Today>
            {month} <Em>{date}</Em> {day}
          </Today>
        </BannerContents>
      </MaxWidth>
    </BannerWrap>
  );
}
