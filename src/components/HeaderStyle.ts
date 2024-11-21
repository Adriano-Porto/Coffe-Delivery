import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: space-between;
  justify-content: space-between;
  flex-direction: row;
  background-color: ${(props) => props.theme.headerBackground};
  padding: 0 1rem;

  a {
    all: unset;
  }
`;

export const HeaderButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const LocationButton = styled.button`
  background-color: ${(props) => props.theme["purple-light"]};
  border: none;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
  color: ${(props) => props.theme["purple-dark"]};
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const CarryoutButton = styled.button`
  background-color: ${(props) => props.theme["yellow-light"]};
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  color: ${(props) => props.theme["yellow-dark"]};

  position: relative;

  div {
    position: absolute;
    top: -8px;
    right: -8px;
    font-size: 12px;
    background-color: ${(props) => props.theme["yellow-dark"]};
    color: ${(props) => props.theme["white"]};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 22px;
    height: 22px;
    border-radius: 50%;
  }
`;
