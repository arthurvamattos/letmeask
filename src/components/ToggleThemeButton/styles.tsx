import styled, { css } from "styled-components";

type ButtonProps = {
  fixed: boolean;
  dark: boolean;
};

export const Button = styled.button<ButtonProps>`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  background: ${(props) => props.theme.colors.background};
  cursor: pointer;
  transition: filter 0.2s;

  :hover {
    filter: brightness(0.95);
  }

  ${(props) =>
    props.fixed &&
    css`
      position: fixed;
      top: 4rem;
      right: 4rem;

      @media (max-width: 55rem) {
        top: 2rem;
        right: 2rem;
      }
    `}
`;
