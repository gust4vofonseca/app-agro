import styled from "styled-components";

export const Container = styled.div`
  height: 5rem;
  border-bottom: 1px solid var(--gray-800);

  height: 5rem;

  display: flex;
  align-items: center;
  padding: 0 4rem;
  justify-content: space-between;

  background-color: var(--green);
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 6.81rem;
  }
`;

export const SendButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonSendFile = styled.button`
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  text-align: center;
  width: 12.375rem;
  height: 3.375rem;

  background: #000000;

  &:hover {
    opacity: 0.9;
  }
  
  border: 0;
  border-radius: 0.413rem;

  color: #ffffff;
`;


