import styled from "styled-components";
import { colors } from "../../styles/colors";

export const StyledMappedItem = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    h4{
        width: 100%;
        height: 0;
        text-align: center;
        color: ${colors.primaryBlue};
        font-family: Lato-Black;
        font-size: 1.2rem;
    }
    p{
        text-align: center;
        color: ${colors.darkGrey};
        font-family: Lato-Light;
    }
`