import Index from "./pages/Index";
import Post from "./components/post/Post";
import { BrowserRouter, Route } from "react-router-dom";
import * as S from "./App.style";

function App() {
  return (
    <>
      <S.GlobalStyle />
      <BrowserRouter>
        <Route path="/" exact component={Index} />
        <Route path="/post" exact component={Post} />
      </BrowserRouter>
    </>
  );
}

export default App;
