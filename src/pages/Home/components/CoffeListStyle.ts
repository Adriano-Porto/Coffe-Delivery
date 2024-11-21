import styled from "styled-components";

export const CoffeListContainer = styled.div`
  h1 {
    font-size: 2rem;
    font-weight: 800;
    font-family: "Baloo 2";
    color: ${(props) => props.theme["base-title"]};
    text-shadow: 0px 0px 1px; /* Added drop shadow */
    margin-bottom: 3rem;
  }

  & > ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
    gap: 2.5rem;
  }
`;
