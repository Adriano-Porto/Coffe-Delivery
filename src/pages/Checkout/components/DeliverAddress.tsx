import { MapPinLine } from "phosphor-react";
import { useContext } from "react";
import { PaymentInformationsContext } from "../../../context/PaymentInformationsContext";
import {
  AddressForm,
  AddressTitle,
  DeliverAddressContainer,
} from "./DeliverAddressStyle";

export function DeliverAddress() {
  const {
    address,
    setRua,
    setNumero,
    setCidade,
    setUF,
    setCEP,
    setComplemento,
  } = useContext(PaymentInformationsContext);

  return (
    <DeliverAddressContainer>
      <AddressTitle>
        <MapPinLine />
        <div>
          <h2>Endereço de Entrega</h2>
          <p>Informe o endereço onde deseja receber o seu pedido</p>
        </div>
      </AddressTitle>

      <AddressForm>
        <input
          type="text"
          placeholder="CEP"
          value={address?.CEP}
          onChange={(e) => setCEP(e.target.value)}
        />
        <input
          type="text"
          placeholder="Rua"
          value={address?.Rua}
          onChange={(e) => setRua(e.target.value)}
        />
        <input
          type="text"
          placeholder="Número"
          value={address?.Numero}
          onChange={(e) => setNumero(e.target.value)}
        />
        <input
          type="text"
          placeholder="Complemento"
          value={address?.Complemento}
          onChange={(e) => setComplemento(e.target.value)}
        />
        <input
          type="text"
          placeholder="Cidade"
          value={address?.Cidade}
          onChange={(e) => setCidade(e.target.value)}
        />
        <input
          type="text"
          placeholder="UF"
          value={address?.UF}
          onChange={(e) => setUF(e.target.value)}
        />
      </AddressForm>
    </DeliverAddressContainer>
  );
}
