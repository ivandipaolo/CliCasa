import styled from "styled-components";
import { colors } from "../../styles/colors";


export const StyledSlogan = styled.div`

display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
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
`