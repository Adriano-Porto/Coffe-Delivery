import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import {
  CarryoutButton,
  HeaderButtonContainer,
  HeaderContainer,
  LocationButton,
} from "./HeaderStyle";

export function Header() {
  const { shoppingCart } = useContext(ShoppingCartContext);

  const totalQuantity = shoppingCart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>

      <HeaderButtonContainer>
        <LocationButton>
          <MapPin size={24} weight="fill" />
          Campina Grande, PB
        </LocationButton>
        <Link to="/check-out">
          <CarryoutButton>
            <ShoppingCart size={24} weight="fill" />
            <div>{totalQuantity}</div>
          </CarryoutButton>
        </Link>
      </HeaderButtonContainer>
    </HeaderContainer>
  );
}
