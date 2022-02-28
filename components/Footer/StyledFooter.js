import styled from "styled-components";
import { colors } from "../../styles/colors";

export const StyledFooter = styled.div`
    margin: auto;
    width: 75%;
    .line{
        height: 1px;
        border-radius: 12px;
        margin: auto;
        border: 0px solid ${colors.lightGrey};
        background-color: ${colors.lightGrey};
    }
    .contactInfo{
        padding: 1.2rem 3rem 1.2rem 3rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
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
        .contact{
            display: flex;
            flex-direction: row;
            padding: 0;
            font-family: Lato-Regular;
            color: ${colors.lightGrey};
            text-align: center;
            align-items: center;
        }
    }
`

export const StyledEnd = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
    justify-content: center;
    align-items: center;
    gap: 12rem;
    margin-top: 1rem;
    p{
        color: ${colors.darkGrey};
        font-family: Lato-Regular;
        font-size: 0.8rem;
    }
    .help{
        display: flex;
        flex-direction: row;
        gap: 2rem;
        a{
            p{
                font-family: Lato-Regular;
                color: ${colors.lightGrey};
            }
        }
    }
    .social{
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }
`