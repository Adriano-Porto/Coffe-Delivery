import styled from "styled-components";

export const CoffeItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 0 25%;
  padding: 0 2rem;
  img {
    width: 8rem;
    margin: -1rem auto;
    transform: translateY(-12%);
  }

  h2 {
    color: ${(props) => props.theme["base-title"]};
    text-align: center;
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 1.25rem;
  }

  p {
    color: ${(props) => props.theme["base-label"]};
    text-align: center;
    font-size: 0.875rem;
  }

  @media (max-width: 768px) {
    border-radius: 60px;
  }
`;

export const TagContainer = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  list-style-type: none;

  margin-bottom: 0.5rem;

  li {
    background-color: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};
    padding: 0.5rem;
    border-radius: 10px;
    text-transform: uppercase;
    font-size: 0.75rem;
  }
`;

export const CoffeFooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: center;
  margin: 1rem 0;

  align-items: center;
  justify-content: center;

  & > span {
    text-align: center;
    margin: auto 0;
  }

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3px;
  }
  .price {
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 2rem;
    text-align: center;
  }
`;

interface ShopButtonProps {
  active: boolean;
}

export const ShopButton = styled.button<ShopButtonProps>`
  display: flex;
  text-align: center;
  padding: 8px;

  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => {
    if (props.active) {
      return props.theme["purple-dark"];
    } else {
      return props.theme["purple"];
    }
  }};
  color: ${(props) => props.theme["white"]};

  & > svg {
    margin: auto;
  }
`;
