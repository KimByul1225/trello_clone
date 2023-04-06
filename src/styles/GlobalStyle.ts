import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import backgroundImg from "../img/backGround.jpg";

const GlobalStyle = createGlobalStyle`
    ${reset}
    body{
        /* background-image: linear-gradient(to top, #9890e3 0%, #b1f4cf 100%); */
        background: url(${backgroundImg}) center no-repeat;
        background-size: cover;
        font-family: 'Nanum Gothic', AppleSDGothicNeo-Regular,'Malgun Gothic','맑은 고딕',dotum,'돋움',sans-serif; 
    }
`;

export default GlobalStyle;
