import { createGlobalStyle } from "styled-components";

// // Breakpoints
// $layout-breakpoint-large: 1920px;
// $layout-breakpoint-medium: 1440px;
// $layout-breakpoint-small: 960px;
// $layout-breakpoint-xsmall: 480px;


export const lightTheme= {
    body: "",
    text: "",
    font:""

}

export const darkTheme = {
    body: "",
    text: "",
    font:""
}

export const GlobalStyles = createGlobalStyle`

*{
    box-sizing: border-box;

}

body {
    margin: 0;
    padding: 0;
    // background: black;
    // color: green;
    // overflow-x: hidden;
    // position:relative;

    
}

*, *::before,*::after, h1,h2,h3,h4,h5{
    margin:0;
    padding:0
}
  


`