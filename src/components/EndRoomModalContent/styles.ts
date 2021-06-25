import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 0.5rem;

  width: 100%;
  max-width: 37rem;
  min-height: 22rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 3rem;
    margin-bottom: 1.5rem;
  }

  strong {
    font-size: 1.5rem;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    line-height: 2.125rem;
    margin-bottom: 0.75rem;
  }

  span {
    font-size: 1rem;
    line-height: 1.625rem;
    color: ${(props) => props.theme.colors.gray};
  }

  div {
    display: flex;
    gap: 0.5rem;
    margin-top: 2.5rem;
  }

  button {
    height: 3.125rem;
    width: 8.25rem;
    border: none;
    border-radius: 0.5rem;
    background-color: ${(props) => props.theme.colors.gray_light};
    color: #f8f8f8;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    transition: opacity 0.2s;

    :hover {
      opacity: 0.8;
    }
  }

  button.delete {
    background-color: ${(props) => props.theme.colors.danger};
  }
`;
