import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useContext } from "react";
import { PaymentInformationsContext } from "../../context/PaymentInformationsContext";
import {
  PurchaseConfirmedContainer,
  PurchaseDetailItem,
  PurchaseDetails,
} from "./PurchaseConfirmedStyle";

export function PurchaseConfirmed() {
  const { address, paymentMethod } = useContext(PaymentInformationsContext);

  return (
    <PurchaseConfirmedContainer>
      <div>
        <header>
          <h1>Uhu! Pedido Confirmado!</h1>
          <h2>Agora é só aguardar que logo o café chegará até você</h2>
        </header>

        <PurchaseDetails>
          <PurchaseDetailItem color="purple">
            <button>
              <MapPin weight="fill" />
            </button>
            <div>
              {" "}
              <span>Entrega em </span>
              <p>
                {address.Rua}, {address.Numero} {"\n"}
              </p>
              <span>
                {address.Bairro}- {address.Cidade}, {address.UF}
              </span>
            </div>
          </PurchaseDetailItem>

          <PurchaseDetailItem color="yellow">
            <button>
              <Timer weight="fill" />
            </button>
            <div>
              {" "}
              <span>Previsão de Entrega {"\n"}</span>
              <p>20 min - 30 min</p>
            </div>
          </PurchaseDetailItem>

          <PurchaseDetailItem color="yellow-dark">
            <button>
              <CurrencyDollar weight="fill" />
            </button>
            <div>
              <span>Pagamento na Entrega {"\n"}</span>
              <p>
                {paymentMethod.type === "credit" && "Cartão de Crédito"}
                {paymentMethod.type === "debit" && "Cartão de Débito"}
                {paymentMethod.type === "cash" && "Dinheiro"}
              </p>
            </div>
          </PurchaseDetailItem>
        </PurchaseDetails>
      </div>

      <img src={"/src/assets/ConfirmedPurchase.svg"} />
    </PurchaseConfirmedContainer>
  );
}
