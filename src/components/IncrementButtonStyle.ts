import styled from "styled-components";

export const IncrementButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 0.5rem;

  font-size: 1rem;
  color: ${(props) => props.theme["purple"]};
  background-color: ${(props) => props.theme["base-button"]};
  border: none;

  svg:hover {
    color: ${(props) => props.theme["purple-dark"]};
  }

  span {
    color: ${(props) => props.theme["base-text"]};
    font-weight: normal;
    font-size: 1rem;
  }
`;
