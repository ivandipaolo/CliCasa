import styled from "styled-components";
import { colors } from "../../styles/colors";

export const StyledSales = styled.div`
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        h2{
            font-size: 4rem;
            font-family: Lato-Thin;
            color: white;
            span{
                font-family: Lato-Black;
            }
        }
        img{
            justify-self: flex-end;
        }
        p{
            color: white;
            font-family: Lato-Regular;
            line-height: 1.5rem;
            letter-spacing: 0.1rem;
        }
        button{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 10rem;
            gap: 2rem;
            padding: 0.2rem 0.2rem 0.2rem 0.5rem;
            border-radius: 100px;
            border: 0;
            background-color: rgba(255, 255, 255, 0.75);
            
            p{
                color: ${colors.primaryBlue};
                font-family: Lato-Regular;
            }
        }
    }
    .venderBox{
        display: flex;
        flex-direction: row;
        align-items: center;
        /* flex-grow: 3; */
        justify-content: center;
        background-color: white;
        border-radius: 3px;
        box-shadow: 4px 4px 8px 0 rgba(23, 53, 111, 0.2);
        gap: 1rem;
        padding: 0.5rem 1.5rem 0.5rem 1.5rem;
        input{
            color: ${colors.lightGrey};
            border: 0;
            height: 3rem;
            width: 16rem;
        }
        .submitBtn{
            width: 10rem;
            height: 0.6rem;
            border-radius: 3px;
            padding: 1rem 0.5rem 1rem 0.5rem;
            background-color: ${colors.primaryBlue};
            margin-left: 3rem;
            color: white;
            font-family: Lato-Bold;
            border: 0;
            text-align: center;
                @media (max-width: 1180px) {
                    display: none;
                }
        }
`