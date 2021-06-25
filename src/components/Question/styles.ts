import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.button`
  background: ${(props) => props.theme.colors.foreground};
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);

  border: 0;

  &.highlighted {
    background: ${(props) => props.theme.colors.highlight};
    border: 1px solid ${(props) => props.theme.colors.purple};

    footer .user-info span {
      color: ${(props) => props.theme.colors.black};
    }
  }

  &.answered {
    background: ${(props) =>
      props.theme.title === "light"
        ? "#dbdcdd"
        : transparentize(0.3, props.theme.colors.foreground)};

    filter: opacity(0.4);
  }

  p {
    color: ${(props) => props.theme.colors.black};
    text-align: start;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;

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
        color: ${(props) =>
          props.theme.title === "light"
            ? props.theme.colors.gray
            : props.theme.colors.black};
        font-size: 0.875rem;
      }
    }

    > div:nth-child(2) {
      display: flex;
      gap: 1rem;
    }

    button {
      border: 0;
      background: transparent;
      cursor: pointer;
      transition: filter 0.2s;

      &.like-button {
        display: flex;
        align-items: flex-end;
        color: ${(props) => props.theme.colors.gray};
        gap: 0.5rem;

        stroke: ${(props) => props.theme.colors.black};

        &.liked {
          color: ${(props) => props.theme.colors.purple};

          svg path {
            stroke: ${(props) => props.theme.colors.purple};
          }
        }
      }

      &:hover {
        filter: ${(props) =>
          props.theme.title === "light"
            ? "brightness(0.7)"
            : "brightness(1.5)"};
      }
    }
  }

  @media (max-width: 35rem) {
    footer {
      flex-direction: column-reverse;
      align-items: stretch;
      gap: 0.75rem;

      > div:nth-child(2) {
        align-self: flex-end;
      }
    }
  }
`;
