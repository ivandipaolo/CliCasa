import styled from "styled-components";

export const StyledConditions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    h1{
        color: white;
        font-size: 2.5rem;
        font-family: Lato-Thin;
    }
    p{
        text-align: center;
        color: white;
        font-size: 0.9rem;
        font-family: Lato-Light;
    }
    button{
        color: white;
        border: 3px solid white;
        border-radius: 10rem;
        background-color: transparent;
        font-family: Lato-Regular;
        padding: 1rem 1.4rem 1rem 1.4rem;
    }
`