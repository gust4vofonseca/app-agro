import styled from 'styled-components';


export const Container = styled.div`

    display: flex;


    @media (max-width: 768px) {    
        flex-direction: column;
    }
`;

export const Select = styled.select`
    width: 16.5rem;
    height: 2.25rem;
    margin-right: 1.5rem;
    padding: 0 1rem;
    border: 1px solid #000; 
    border-radius: 5px; 
    background: transparent;
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