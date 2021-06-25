import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  .create-room {
    margin-top: 4rem;
    height: 3.125rem;
    border-radius: 0.5rem;
    font-weight: 500;
    background: #ea4335;
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    border: 0;

    transition: filter 0.2s;

    img {
      margin-right: 0.5rem;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }

  .separator {
    font-size: 0.875rem;
    color: #a8a8b3;

    margin: 2rem 0;
    display: flex;
    align-items: center;

    &::before {
      content: "";
      flex: 1;
      height: 1px;
      background: #a8a8b3;
      margin-right: 1rem;
    }

    &::after {
      content: "";
      flex: 1;
      height: 1px;
      background: #a8a8b3;
      margin-left: 1rem;
    }
  }

  @media (max-width: 55rem) {
    flex-direction: column-reverse;
    justify-content: flex-end;
  }
`;

export const Aside = styled.aside`
  flex: 7;
  background: ${(props) => props.theme.colors.purple};
  color: ${(props) => props.theme.colors.white};

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 8rem 5rem;

  img {
    max-width: 20rem;
  }

  strong {
    font: 700 2.25rem "Poppins", sans-serif;
    line-height: 2.625rem;
    margin-top: 1rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 2rem;
    margin-top: 1rem;
    color: ${(props) => props.theme.colors.white};
  }

  @media (max-width: 64rem) {
    flex: 2;
  }

  @media (max-width: 55rem) {
    padding: 4rem 2rem;

    align-items: center;
    text-align: center;

    img {
      max-width: 6rem;
    }
  }
`;

export const Main = styled.main`
  flex: 8;

  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  .main-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 20rem;
    align-items: stretch;
    text-align: center;

    > img {
      align-self: center;
    }

    h2 {
      font-size: 1.5rem;
      margin: 4rem 0 1.5rem;
      font-family: "Poppins", sans-serif;
    }

    form {
      input {
        height: 50px;
        border-radius: 0.5rem;
        padding: 0 1rem;
        background: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.black};
        border: 1px solid #a8a8b3;

        ::placeholder {
          color: ${(props) => props.theme.colors.black};
        }
      }

      button {
        margin-top: 1rem;
      }

      button,
      input {
        width: 100%;
      }
    }

    p {
      font-size: 0.875rem;
      margin-top: 1rem;
      color: ${(props) =>
        props.theme.title === "light" ? " #737380" : props.theme.colors.black};

      a {
        color: ${(props) => props.theme.colors.pink};
      }
    }
  }

  @media (max-width: 55rem) {
    min-height: 90vh;
    padding: 2rem;
  }
`;
