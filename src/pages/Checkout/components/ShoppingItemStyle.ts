import styled from "styled-components";

export const ShoppingItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 0.5rem 0;

  max-height: 80px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: left;
  }
  h3 {
    font-weight: 400;
    font-size: 1.25rem;
  }

  span {
    margin-left: auto;
    margin-bottom: auto;
    color: ${(props) => props.theme["base-text"]};
    font-weight: bold;
    font-size: 21px;
  }

  img {
    height: 64px;
  }
`;

export const ShoppingItemButtonDiv = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const RemoveItemButton = styled.button`
  background-color: ${(props) => props.theme["base-button"]};
  border: none;
  border-radius: 6px;
  padding: 0.5rem;
  color: ${(props) => props.theme["base-text"]};

  display: flex;
  align-items: center;
  gap: 0.5rem;
  svg {
    font-size: 1.25rem;
    color: ${(props) => props.theme["purple-dark"]};
  }

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
    svg {
      color: ${(props) => props.theme["base-subtitle"]};
    }
  }
`;
