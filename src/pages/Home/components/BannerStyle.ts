import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  padding: 4rem 8rem;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  @media (max-width: 1080px) {
    flex-direction: column-reverse;
  }

  & > img {
    max-width: 600px;
    margin: auto;
  }
`;

export const BannerTitle = styled.h1`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h1 {
    font-size: 3rem;
    font-weight: 800;
    font-family: "Baloo 2";
    color: ${(props) => props.theme["base-title"]};
    text-shadow: 1px 1px 2px; /* Added drop shadow */
    line-height: 1;
  }

  h2 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["base-subtitle"]};
    font-weight: 300;
  }
`;

export const BannerItensContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  justify-content: start;
  margin-top: 1rem;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

interface BannerItemProps {
  color: "yellow" | "yellow-dark" | "base-text" | "purple";
}

export const BannerItem = styled.div<BannerItemProps>`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;

  & > button {
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme[props.color]};
    border-radius: 50%;
    color: white;
    border: none;
    padding: 0.5rem;
  }
`;
