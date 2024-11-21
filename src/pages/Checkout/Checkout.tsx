import { CheckoutContainer } from "./CheckoutStyle";
import { DeliverAddress } from "./components/DeliverAddress";
import { PaymentMethod } from "./components/PaymentMethod";
import { ShoppingCart } from "./components/ShoppingCart";

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <DeliverAddress />
        <PaymentMethod />
      </div>

      <div>
        <h2>Cafés selecionados</h2>
        <ShoppingCart />
      </div>
    </CheckoutContainer>
  );
}
