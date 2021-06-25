import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  > strong {
    margin-top: 0.5rem;
    font-family: "Poppins", sans-serif;
    font-size: 1.125rem;
    font-weight: 500;
  }

  > span {
    font-size: 0.875rem;
    line-height: 1.3rem;
    max-width: 16rem;
    text-align: center;
    color: ${(props) => props.theme.colors.gray};
  }
`;
