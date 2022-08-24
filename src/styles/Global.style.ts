import { createGlobalStyle } from "styled-components";
import { globalTheme } from "../types/themeType";



export const GlobalStyles = createGlobalStyle<globalTheme>`
    *{
        margin: 0;
        padding: 0;
        border: 0;
        text-align:center;
        color: ${props => props.globalTheme ? "" : "#FFF"} 
    }

    body{
        background-color: ${props => props.globalTheme ? "#F1F4F1" : "#223322"}
    }
`