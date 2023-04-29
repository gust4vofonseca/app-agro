import { shade } from "polished";
import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`;

export const Input = styled.input`
    width: 16.5rem;
    height: 2.25rem;
    padding: 0 1rem;
    border: 1px solid #000; 
    border-radius: 5px; 
    appearance: none;
    -webkit-appearance: none;
    margin-top: 1.5rem;
`

export const DivTitle = styled.div`
    text-align: center;
    margin-top: 3rem;
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
        opacity: 0.7;
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


export const ButtonCalculate = styled.button`
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

export const DivSummary = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

