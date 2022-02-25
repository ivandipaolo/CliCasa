import styled from "styled-components";
import { colors } from "../../styles/colors";

export const StyledStepInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1.2rem;
    width: 20rem;
    height: 12rem;
    height: 250px;
    h5{
        color: white;
        align-self: flex-start;
        text-align: center;
        background-color: ${colors.primaryBlue};
        padding: 0.7rem 1.2rem 0.7rem 1.2rem;
        border-radius: 100%;
        font-size: 1.3rem;
        /* font-weight: 100; */
        font-family: Playball;
    }
    div{
        display: flex;
        flex-direction: column;
        text-align: start;
        align-items: flex-start;
        padding: 0%;
        font-family: Lato-Regular;
        gap: 0px;
        height: 100%;
        h4{
            text-align: start;
            padding-top: 0%;
            color: ${colors.darkGrey};
            font-size: 1.3rem;
        }
        p{
            justify-self: flex-start;
            color: ${colors.lightGrey};
            font-size: 0.9rem;
        }
    }
`