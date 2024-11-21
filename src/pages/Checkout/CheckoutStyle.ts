import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-top: 5rem;

  & > div:first-child {
    flex: 0 0 60%;
  }

  & > div:last-child {
    flex: 0 0 40%;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 800;
    color: ${(props) => props.theme["base-title"]};
    margin-bottom: 1rem;
  }
`;
