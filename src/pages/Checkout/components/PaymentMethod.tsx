import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { useContext } from "react";
import { PaymentInformationsContext } from "../../../context/PaymentInformationsContext";
import {
  PaymentMethodButtonsContainer,
  PaymentMethodContainer,
  PaymentMethodHeaderContainer,
} from "./PaymentMethodStyle";

export function PaymentMethod() {
  const { setPaymentMethod } = useContext(PaymentInformationsContext);

  return (
    <PaymentMethodContainer>
      <PaymentMethodHeaderContainer>
        <CurrencyDollar />
        <div>
          <h2>Pagamento</h2>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </PaymentMethodHeaderContainer>

      <PaymentMethodButtonsContainer>
        <button onClick={() => setPaymentMethod("credit")}>
          <CreditCard />
          Cartão de Crédito
        </button>
        <button>
          <Bank />
          Cartão de Débito
        </button>
        <button>
          <Money />
          Dinheiro
        </button>
      </PaymentMethodButtonsContainer>
    </PaymentMethodContainer>
  );
}
