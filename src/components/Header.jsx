import Logo from "./Logo";
import Login from "./Login";
import styled from "styled-components";
export default function Header() {
  const Header = styled.header`
    background: var(--white-color);
  `;

  const WrapDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
    padding: 1rem 0;
    width: 1224px;
    max-width: calc(100% - 4rem);
    margin: 0 auto;
  `;
  return (
    <Header>
      <WrapDiv>
        <Logo />
        <Login />
      </WrapDiv>
    </Header>
  );
}
