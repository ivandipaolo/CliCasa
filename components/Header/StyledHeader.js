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
                color: #263e54;
            }
        }
    }
    nav{
        display: flex;
        flex-direction: row;
        gap: 3rem;
        Link{
            a{
                position: relative;
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                p{
                    color: ${colors.darkGrey};
                    font-family: Lato;
                    font-weight: 400;
                }
            }
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