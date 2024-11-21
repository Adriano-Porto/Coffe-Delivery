import styled from "styled-components";

export const ShoppingCartContainer = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  padding: 40px;
  border-radius: 0 3rem 0 3rem;
`;
export const ItemsList = styled.div`
  max-height: 250px;
  overflow-y: auto;

  hr {
    margin: 12px 0;
    border: 1px solid ${(props) => props.theme["base-button"]};
  }

  h3 {
    text-align: center;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const ItensDetails = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  div {
    display: flex;
    justify-content: space-between;

    span {
      font-size: 1.25rem;
    }
  }

  div:last-child {
    font-weight: bold;
    color: ${(props) => props.theme["base-subtitle"]};
    span {
      font-size: 2rem;
    }
  }
`;

export const ConfirmDeliveryButton = styled.button`
  width: 100%;
  margin-top: 1rem;

  background-color: ${(props) => props.theme["yellow"]};
  border: none;
  border-radius: 6px;
  padding: 1.25rem;
  color: ${(props) => props.theme["white"]};
`;
