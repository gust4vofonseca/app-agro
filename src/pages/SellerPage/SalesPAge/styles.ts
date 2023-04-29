import { shade } from "polished";
import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin-top: 3rem;
`;

export const DivTitle = styled.div`
    text-align: center;
`

export const DevSelect = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 2rem;
    margin-left: 4.125rem;
`

export const ButtonAdd = styled.button`
    margin-top: 2rem;

    width: 4.125rem;
    height: 2.313rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-radius: 0.625rem;

    background: var(--green-light);
    border: none;
    color: white;

    transition: background-color 0.2s;

    .loader {
        margin-top: 0.4rem;
    }

    &:hover {
        background: ${shade(0.4, '#B8FE97')};
    }

    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: #000;
    text-align: center;

`
export const ButtonRemove = styled.button`
    width: 4.125rem;
    height: 2.313rem;

    gap: 0.5rem;
    border-radius: 0.625rem;

    background: var(--red);
    border: none;
    color: white;

    transition: background-color 0.2s;

    .loader {
        margin-top: 0.4rem;
    }

    &:hover {
        opacity: 0.8;
    }

    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: #000;
    text-align: center;

    margin-left: 1rem;

`

