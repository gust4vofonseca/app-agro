import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: transparent;

  border-radius: 0.25rem;

  border-bottom: 0.15rem solid transparent;
  padding: 0.75rem 1rem;
  width: 26rem;
  height: 3rem;

  display: flex;
  align-items: center;

  margin-bottom: 0.75rem;

  @media (max-width: 800px) {
    width: 16rem;
  }

  color: #292929;
  background-color: #f3f3f3;

  display: flex;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      border-bottom: #c53030;
      svg {
        height: 1.15rem;
        width: 1.3rem;
        color: #c53030;
        margin-bottom: 0.1rem;
      }
    `}

  ${props =>
    props.isFocused &&
    css`
      border-bottom: 0.15rem solid #fff;
      color: #fff;

      svg {
        color: #fff;
      }
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #fff;
    `}

    input {
    color: #292929;
    background: transparent;
    border: 0;
    width: 100%;
    height: 1.5rem;
    &::placeholder {
      color: #292929;
    }
  }
  svg {
    margin-left: 0rem;
    margin-right: 0.88rem;
  }

  button {
    border: none;
    background: transparent;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: -0.5rem;
  }
`;
