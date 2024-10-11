import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

main{
     width: 50%;
     height: 550px;
     border-radius: 12px;
     background: white;
     display: flex;
     flex-direction: column;
	 position: fixed;
	 top: 10%;
	 right: 10%;
    align-items: flex-start;
  }

  .draggable {
  width: 150px;
  height: 150px;
  background-color: lightblue;
  cursor: move;
  display: flex;
  justify-content: flex-start;
  font-family: Arial, sans-serif;
}


.top-left-resize {
    cursor: nw-resize; /* Diagonal resize cursor */
}

.top-resize {
    cursor: n-resize; /* Vertical resize cursor */
}

.top-right-resize {
    cursor: ne-resize; /* Diagonal resize cursor */
}

.left-resize {
    cursor: w-resize; /* Horizontal resize cursor */
}

.right-resize {
    cursor: e-resize; /* Horizontal resize cursor */
}

.bottom-left-resize {
    cursor: sw-resize; /* Diagonal resize cursor */
}

.bottom-resize {
    cursor: s-resize; /* Vertical resize cursor */
}

.bottom-right-resize {
    cursor: se-resize; /* Diagonal resize cursor */
}

/* Additional styles for hover effect (optional) */
.draggable:hover {
    border-color: #888; /* Change border color on hover */
}


section{
  padding-left: 15px;
  scroll-behavior: auto;
  overflow: scroll;
    cursor: default; /* Allow default cursor for the section */
  padding-left: 15px;
  scroll-behavior: auto;
  width: 100%;
}

hr{
   color: #e0e0e0;
   width: 100%;
  }

header{
background: #e0e0e0;
z-index: 1000;
position: fixed;
top: 0;
width: 100%;}

.no-pointer-events {
  pointer-events: none; /* Disable pointer events */
}
.main-window {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.main-window.closing {
  opacity: 0;
  transform: scale(0.9); /* Shrink and fade out */
}
`



export default GlobalStyle;
