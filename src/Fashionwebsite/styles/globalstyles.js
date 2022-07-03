import {createGlobalStyle} from 'styled-components'

export const Globalstyles = createGlobalStyle`

*,*::before,*::after{
    margin:0;
    padding:0;
}

body{
    overflow-x: hidden;
}

h1,h2,h3,h4,h5,h6{
    margin:0;
    padding:0;
}

a{
    color: inherit;
    text-decoration: none;
}

`

export const DarkTheme={
    body: '#202020',
    text: '#fff',
    bodyRgba: '32, 32, 32',
    textRgba: '255, 255, 255',
    grey: '#bebebe',
    fontxm: '.75em',
    fontsm: '.875',
    fontmd: '1em',
    fontlg: '1.25em',
    fontxl: '2em',
    fontxxl: '3em',
    fontxxxl: '5em',
    fontBig: '10em',
    navHeight: '5rem'

}

export const LightTheme={
    body: '#fff',
    text: '#202020',
    bodyRgba: '255, 255, 255',
    textRgba: '32, 32, 32',
    grey: '#bebebe',
    fontxm: '.75em',
    fontsm: '.875',
    fontmd: '1em',
    fontlg: '1.25em',
    fontxl: '2em',
    fontxxl: '3em',
    fontxxxl: '5em',
    fontBig: '10em',
    navHeight: '5rem'
}