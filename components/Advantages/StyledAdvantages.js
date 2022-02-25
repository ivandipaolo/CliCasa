import styled from "styled-components";
import { colors } from "../../styles/colors";

export const StyledAdvantages = styled.div`
    display: flex;
    position: relative;
    margin: auto;
    margin-top: 5rem;
    padding: 3rem 2rem 3rem 2rem;
    width: 75%;
    background-color: white;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h2{
        font-family: Lato-Light;
        color: ${colors.primaryBlue};
        font-size: 3rem;
    }  
    p{
        font-family: Lato-Light;
        color:${colors.darkGrey};
        font-size: 1.1rem;
    }
    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        height: 20rem;
    }
`