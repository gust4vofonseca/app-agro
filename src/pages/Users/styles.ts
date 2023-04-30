import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .select-users{
        margin-top: 2rem;
    }

    .form-user {
        margin-top: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        #password {
            margin-left: 1.7rem;
        }
    }

`;

export const DivTitle = styled.div`
    text-align: center;
    margin-top: 3rem;
`

export const Select = styled.select`
    width: 16.5rem;
    height: 2.25rem;
    padding: 0 1rem;
    border: 1px solid #000; 
    border-radius: 5px; 
    background: transparent;
`
export const DivInput = styled.div`
    margin-top: 2rem;
`

export const Input = styled.input`
    width: 16.5rem;
    height: 2.25rem;
    padding: 0 1rem;
    border: 1px solid #000; 
    border-radius: 5px; 
    appearance: none;
    -webkit-appearance: none;
`

export const ButtonVisible = styled.button`
    border: none;
    background: transparent;
    margin-left: 0.5rem;
`
export const Button = styled.button`
    margin: 2rem auto;

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