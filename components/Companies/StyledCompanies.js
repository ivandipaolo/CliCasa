import styled from "styled-components";
import { colors } from "../../styles/colors";

export const StyledCompanies = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-top: 6rem;
    h1{
        color: ${colors.primaryBlue};
        font-size: 2.5rem;
        font-family: Lato-Thin;
    }
    p{
        text-align: center;
        color: ${colors.darkGrey};
        font-size: 1.1rem;
        font-family: Lato-Light;
    }
`