import styled from "styled-components"
import lockscreenwallpaper from "../assets/images/lockscreenwallpaper.webp";

export const LockProfilePicture = styled.img`
border-radius: 100%;
background-image: url(${lockscreenwallpaper});
border: 2px solid white;
height: 140px;
width: 140px;
background-repeat: no-repeat;
background-position: center;
background-size: cover;
`