import Index from "./pages/Index";
// import Post from "./components/post/Post";
import PostDetail from "./components/postDetail/PostDetail";
import { BrowserRouter, Route } from "react-router-dom";
import * as S from "./App.style";
import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
function App() {
  const [applicationData, setApplicationData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  console.log(applicationData);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./data.json");
        const data = await response.json();
        setApplicationData(data);
        setIsLoaded(true);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <S.GlobalStyle />
      <BrowserRouter>
        <Header />
        <Route
          path="/"
          exact
          render={() => (
            <Index applicationData={applicationData} isLoaded={isLoaded} />
          )}
        />
        <Route
          path="/postDetail/:id"
          exact
          render={() => (
            <PostDetail applicationData={applicationData} isLoaded={isLoaded} />
          )}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
