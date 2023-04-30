import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .Link{
        text-decoration: none;
    }
`;

export const Button = styled.button`
    margin-top: 2rem;

    width: 9.688rem;
    height: 2.313rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-radius: 0.625rem;

    background: var(--green);
    border: none;
    color: white;

    transition: background-color 0.2s;

    .loader {
        margin-top: 0.4rem;
    }

    &:hover {
        opacity: 0.7;
    }

    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: #000;
    text-align: center;

`

export const DivTitle = styled.div`
    text-align: center;
    margin-top: 3rem;
`
