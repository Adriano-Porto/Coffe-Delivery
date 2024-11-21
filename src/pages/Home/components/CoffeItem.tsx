import { ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { IncrementButton } from "../../../components/IncrementButton";
import { ShoppingCartContext } from "../../../context/ShoppingCartContext";
import {
  CoffeFooterContainer,
  CoffeItemContainer,
  ShopButton,
  TagContainer,
} from "./CoffeItemStyle";

interface CoffeItemProps {
  coffe: {
    name: string;
    tags: string[];
    description: string;
    price: number;
    image: string;
  };
  coffeState: {
    quantity: number;
    inChart: boolean;
  };
}

export function CoffeItem({ coffe, coffeState }: CoffeItemProps) {
  const { name, price, image, tags, description } = coffe;
  const { quantity, inChart } = coffeState;

  const { setCoffeQuantityInChart } = useContext(ShoppingCartContext);

  const [coffeQuantity, setCoffeQuantity] = useState(
    quantity > 0 ? quantity : 1
  );

  function handleChangeCoffeQuantity() {
    setCoffeQuantityInChart({
      name: name,
      quantity: coffeQuantity,
      price: price,
      image: image,
    });
  }

  return (
    <CoffeItemContainer>
      <img src={image} alt={name} />
      <TagContainer>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </TagContainer>
      <h2>{name}</h2>.<p>{description}</p>
      <CoffeFooterContainer>
        <div>
          <span>R$ </span>
          <span className="price">
            {price.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </div>
        <IncrementButton
          onValueChange={setCoffeQuantity}
          value={coffeQuantity}
        />
        <ShopButton onClick={handleChangeCoffeQuantity} active={inChart}>
          <ShoppingCart weight="fill" />
        </ShopButton>
      </CoffeFooterContainer>
    </CoffeItemContainer>
  );
}
