import styled from "styled-components";
import { globalTheme } from "../../types/themeType";

export const ButtonLateral = styled.button<globalTheme>`
    width: 3.5rem;
    height: 10rem;
    border-radius: 8px;
    background-color: ${props => props.globalTheme? "#74E09A" : "#52C078"};
    color: #4B7D7D;
    margin: 0.5rem;
    &:active{
        background-color: #74FF9A;
    }
`