import styled from "styled-components";

export const PurchaseConfirmedContainer = styled.div`
  padding: 5rem 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  img {
    max-width: 600px;
    margin: auto auto 0 auto;
  }

  header {
    h1 {
      color: ${(props) => props.theme["yellow-dark"]};
    }
    h2 {
      font-size: 1.25rem;
      font-weight: 400;
      color: ${(props) => props.theme["base-subtitle"]};
    }

    margin-bottom: 2rem;
  }
`;
export const PurchaseDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  border-radius: 5px 20px 5px 20px;
  border: 1px solid ${(props) => props.theme["yellow-dark"]};
`;

interface PurchaseDetailItemProps {
  color: "purple" | "yellow" | "yellow-dark";
}
export const PurchaseDetailItem = styled.div<PurchaseDetailItemProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  button {
    padding: 12px;
    border-radius: 50%;
    background-color: ${(props) => props.theme[props.color]};
    border: none;
    color: ${(props) => props.theme["white"]};
    display: flex;
    align-items: center;
    font-size: 1.5rem;
  }
  p {
    display: inline;
    font-weight: bold;
  }
`;
