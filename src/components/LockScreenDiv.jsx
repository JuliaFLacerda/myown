import styled from "styled-components";
import lockscreenwallpaper from "../assets/images/lockscreenwallpaper.webp";

export const LockScreenDiv = styled.div`
width: 100%;
height: 100vh;
display : flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10vh;
background-image: url(${lockscreenwallpaper});
opacity: 80%;
background-repeat: no-repeat;
background-position: center;
background-size: cover;
`