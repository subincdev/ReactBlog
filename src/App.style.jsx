import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
export const GlobalStyle = createGlobalStyle`
  ${reset}
  :root {
	--main-color: rgb(55, 170, 236);
	--main-rgb: 55, 171, 236;
	--outline-border: rgb(55, 160, 236);
	--red-color: rgb(243, 124, 75);
	--red-rgb: 243, 124, 75;
	--black-color: #28303f;
	--white-color: #fff;
	--gray-color: #767676;
	--border-color: #ddd;
	--gray-background-light: #f9f9f9;
	--gray-background: #f5f5f5;
	--gray-text: #6f6f6f;
	--border-radius: 0.4em;
}

/* 공통 css */
h1,
a,
div,
p,
section,
article,
input,
textarea {
	box-sizing: border-box;
}

a {
	text-decoration: none;
	color: inherit;
}

html {
	font-size: 10px;
}

body {
	font-size: 1.6rem;
	line-height: 1.4;
}

input,
button {
	font-size: inherit;
	font-family: inherit;
}

button {
	cursor: pointer;
}

a {
	border-radius: 0.8rem;
	overflow: hidden;
}
img {
	vertical-align: bottom;
}

a:focus,
input:focus,
button:focus,
textarea:focus {
	outline: 3px solid rgba(var(--main-rgb), 0.2);
	box-shadow: 0 0 0 1px var(--outline-border);
}

body {
	background: var(--gray-background-light);
}
`;
