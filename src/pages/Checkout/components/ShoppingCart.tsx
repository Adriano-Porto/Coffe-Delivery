import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../../context/ShoppingCartContext";
import {
  ConfirmDeliveryButton,
  ItemsList,
  ItensDetails,
  ShoppingCartContainer,
} from "./ShoppingCartStyle";
import { ShoppingCartItem } from "./ShoppingItem";

export function ShoppingCart() {
  const { shoppingCart } = useContext(ShoppingCartContext);

  const totalItemsPrice = shoppingCart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const deliveryFee = 3.5;
  const totalPrice = totalItemsPrice + deliveryFee;

  useEffect(() => {});

  return (
    <ShoppingCartContainer>
      <ItemsList>
        {shoppingCart.length > 0 ? (
          shoppingCart.map((item, index) => (
            <ShoppingCartItem coffe={item} key={index} />
          ))
        ) : (
          <h3>Carrinho Vazio</h3>
        )}
      </ItemsList>

      <ItensDetails>
        <div>
          <span>Total de Itens</span>
          <span>
            {totalItemsPrice.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
        <div>
          <span>Entrega</span>
          <span>
            {deliveryFee.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
        <div>
          <span>Total</span>
          <span>
            {totalPrice.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
      </ItensDetails>

      <Link to="/confirmed">
        <ConfirmDeliveryButton>CONFIRMAR PEDIDO</ConfirmDeliveryButton>
      </Link>
    </ShoppingCartContainer>
  );
}
