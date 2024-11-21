import styled from "styled-components";

export const DeliverAddressContainer = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  padding: 3rem;

  border-radius: 1rem;
`;

export const AddressTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  gap: 0.5rem;
  margin-bottom: 2rem;

  svg {
    font-size: 1.5rem;
    color: ${(props) => props.theme["yellow-dark"]};
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 6px;
  }
`;

export const AddressForm = styled.form`
  input {
    padding: 0.5rem;
    background-color: ${(props) => props.theme["base-button"]};
    border: none;
    border-radius: 5px;
    margin: 0.5rem 0;

    outline: none;

    &:active,
    &:focus,
    &:hover,
    &:visited {
      border: none;
      box-shadow: none;
      outline: 2px solid ${(props) => props.theme["yellow-dark"]} !important;
    }
  }

  input[placeholder="CEP"] {
    width: calc(33.33% - 1rem);
  }

  input[placeholder="Rua"] {
    width: 100%;
  }

  input[placeholder="Número"] {
    width: calc(33.33% - 1rem);
    margin-right: 1rem;
  }

  input[placeholder="Complemento"] {
    width: calc(66.66%);
  }

  input[placeholder="Complemento"]::after {
    content: "opcional";
    font-size: 0.75rem;
    color: ${(props) => props.theme["gray"]};
    margin-left: 0.5rem;
  }

  input[placeholder="Bairro"] {
    width: calc(33.33% - 1rem);
    margin-right: 1rem;
  }

  input[placeholder="Cidade"] {
    width: calc(66.66% - 4rem);
    margin-right: 1rem;
  }

  input[placeholder="UF"] {
    width: 3rem;
  }
`;
