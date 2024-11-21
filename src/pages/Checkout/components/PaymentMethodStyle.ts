import styled from "styled-components";

export const PaymentMethodContainer = styled.div`
  margin-top: 2rem;
  background-color: ${(props) => props.theme["base-card"]};
  padding: 3rem;

  border-radius: 1rem;
`;

export const PaymentMethodHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  gap: 0.5rem;
  margin-bottom: 2rem;

  svg {
    font-size: 1.5rem;
    color: ${(props) => props.theme["purple-dark"]};
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 6px;
  }
`;

export const PaymentMethodButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;

  button {
    flex: 1;
    background-color: ${(props) => props.theme["base-button"]};
    border: none;
    border-radius: 6px;

    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: ${(props) => props.theme["base-text"]};
    padding: 1rem;

    text-transform: uppercase;

    &:hover {
      background-color: ${(props) => props.theme["base-hover"]};
    }

    &:active,
    &:focus,
    &.selected {
      background-color: ${(props) => props.theme["base-hover"]};
      outline: 2px solid ${(props) => props.theme["purple"]};
      box-shadow: none;
    }
  }

  svg {
    color: ${(props) => props.theme["purple-dark"]};
    font-size: 1.75rem;
  }
`;
