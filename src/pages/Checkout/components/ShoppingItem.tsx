import { Trash } from "phosphor-react";
import { useContext } from "react";
import { IncrementButton } from "../../../components/IncrementButton";
import { ShoppingCartContext } from "../../../context/ShoppingCartContext";
import {
  RemoveItemButton,
  ShoppingItemButtonDiv,
  ShoppingItemContainer,
} from "./ShoppingItemStyle";

interface ShoppingCartItemProps {
  coffe: {
    name: string;
    price: number;
    quantity: number;
    image: string;
  };
}

export function ShoppingCartItem({
  coffe: { name, price, quantity, image },
}: ShoppingCartItemProps) {
  const { setCoffeQuantityInChart } = useContext(ShoppingCartContext);

  function handleChangeQuantity(quantity: number) {
    setCoffeQuantityInChart({ name, quantity });
  }

  return (
    <>
      <ShoppingItemContainer>
        <img src={image} alt={name} />
        <div>
          <h3>{name}</h3>
          <ShoppingItemButtonDiv>
            <IncrementButton
              value={quantity}
              onValueChange={handleChangeQuantity}
            ></IncrementButton>
            <RemoveItemButton>
              <Trash />
              REMOVER
            </RemoveItemButton>
          </ShoppingItemButtonDiv>
        </div>
        <span>
          {(price * quantity).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </ShoppingItemContainer>
    </>
  );
}
