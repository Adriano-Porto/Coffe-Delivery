import { useContext } from "react";
import coffesJSON from "../../../assets/coffes.json";
import { ShoppingCartContext } from "../../../context/ShoppingCartContext";
import { CoffeItem } from "./CoffeItem";
import { CoffeListContainer } from "./CoffeListStyle";

type CoffeData = {
  name: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
}[];

export function CoffeList() {
  const coffes = JSON.parse(JSON.stringify(coffesJSON)) as CoffeData;

  const { findCoffeByName } = useContext(ShoppingCartContext);

  return (
    <CoffeListContainer>
      <h1>Nossos cafés</h1>
      <ul>
        {coffes.map((coffe, index) => {
          const coffeState = findCoffeByName(coffe.name);
          return (
            <CoffeItem coffe={coffe} key={index} coffeState={coffeState} />
          );
        })}
      </ul>
    </CoffeListContainer>
  );
}
