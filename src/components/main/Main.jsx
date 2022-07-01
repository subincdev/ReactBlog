import React from "react";
import Post from "../post/Post";
import Aside from "../aside/Aside";
import * as S from "./Main.style";
export default function Main(props) {
  if (props) {
    return (
      <>
        <main>
          <S.WrapMain>
            <S.Hidden>Post</S.Hidden>
            <Post posts={props.posts} userInfo={props.user} />
            <Aside userInfo={props.user} />
          </S.WrapMain>
        </main>
      </>
    );
  }
}
