import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }

 html{
     font-size: 62.5%;
     scroll-behavior: smooth;
 }

 body{
     min-height: 100vh;
     font-family: 'DM Sans', sans-serif;
     /* overflow-x: hidden; */
 }

 button{
    font-family: 'DM Sans', sans-serif;
    font-weight: bold;
 }
 
`;

export default GlobalStyle;
