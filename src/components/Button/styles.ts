import styled from "styled-components";

export const Button = styled.button`
  height: 3.125rem;
  border-radius: 0.5rem;
  font-weight: 500;
  background: ${(props) => props.theme.colors.purple};
  color: #fff;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  &.outlined {
    background: ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.purple};
    color: ${(props) => props.theme.colors.purple};
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
