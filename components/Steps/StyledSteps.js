import styled from "styled-components";

export const StyledSteps = styled.div`
    display: flex;
    position: relative;
    margin: auto;
    padding: 1rem 2rem 1rem 2rem;
    width: 75%;
    background-color: white;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`

export const StyledImg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    @media(max-width: 1280px) {
        display: none;
    }
`