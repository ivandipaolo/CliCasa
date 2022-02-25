import styled from "styled-components";
import { colors } from "../../styles/colors";

export const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem;
    z-index: 1;
    .logo{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.3rem;
        p {
            color: ${colors.primaryBlue};
            font-size: 1.6rem;
            font-weight: 600;
            font-family: Museo;
            span{
                color: ${colors.darkGrey};
            }
        }
    }
    nav{
        display: flex;
        flex-direction: row;
        gap: 3rem;
        a{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            text-decoration: underline 0.15em rgba(0, 0, 0, 0);
            transition: text-decoration-color 300ms;
            p{
                font-family: Lato-Regular;
                color: ${colors.lightGrey}
            }
        }
        a:hover {
        text-decoration-color: ${colors.primaryBlue};
        }
    }
    .social{
        width: fit-content;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.2rem;
    }
`