import { transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  header {
    padding: 1.5rem;

    ${(props) =>
      props.theme.title === "light"
        ? "border-bottom: 1px solid #e2e2e2"
        : `border-bottom: 1px solid ${transparentize(
            0.8,
            props.theme.colors.black
          )}`};

    .content {
      max-width: 70rem;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > a img {
        max-height: 2.75rem;
      }

      > div {
        display: flex;
        gap: 1rem;

        button {
          height: 2.5rem;
        }
      }
      gap: 1.2rem;

      @media (max-width: 35rem) {
        flex-direction: column;

        > div {
          gap: 0.5rem;
        }
      }
    }
  }

  main {
    padding: 0 1.5rem 1.5rem;
    max-width: 50rem;
    margin: 0 auto;

    .room-title {
      margin: 2rem 0 1.5rem;
      display: flex;
      align-items: center;

      h1 {
        font-family: "Poppins", sans-serif;
        font-size: 1.5rem;
        color: ${(props) => props.theme.colors.black};
      }

      span {
        margin-left: 1rem;
        background: ${(props) => props.theme.colors.pink};
        border-radius: 9999px;
        padding: 0.5rem 1rem;
        color: ${(props) => props.theme.colors.white};
        font-weight: 500;
        font-size: 0.875rem;
      }
    }

    form {
      textarea {
        width: 100%;
        border: 0;
        padding: 1rem;
        border-radius: 0.5rem;
        background: ${(props) => props.theme.colors.background};

        ${(props) =>
          props.theme.title === "light"
            ? "box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04)"
            : `border: 1px solid ${props.theme.colors.black}`};

        resize: vertical;
        min-height: 8.125rem;
      }
    }

    .form-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1rem;

      .user-info {
        display: flex;
        align-items: center;

        img {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
        }

        span {
          margin-left: 0.5rem;
          color: ${(props) => props.theme.colors.black};
          font-weight: 500;
          font-size: 0.875rem;
        }
      }

      > span {
        font-size: 0.875rem;
        color: ${(props) => props.theme.colors.gray};
        font-weight: 500;

        button {
          background: none;
          border: none;
          color: ${(props) => props.theme.colors.purple};
          text-decoration: underline;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
        }
      }
    }

    .question-list {
      margin-top: 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      gap: 0.5rem;
    }
  }

  @media (max-width: 35rem) {
    main {
      .room-title {
        flex-direction: column-reverse;
        gap: 0.5rem;

        h1 {
          align-self: stretch;
        }
      }

      .form-footer {
        flex-direction: column;
        align-items: stretch;
        gap: 1rem;
      }
    }
  }
`;
