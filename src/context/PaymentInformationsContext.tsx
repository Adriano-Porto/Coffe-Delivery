import { createContext, ReactNode, useState } from "react";

interface AddressInterface {
  Rua: string;
  Numero: string;
  Bairro: string;
  Cidade: string;
  UF: string;
  CEP: string;
  Complemento: string;
}

interface paymentMethodInterface {
  type: "" | "credit" | "debit" | "cash";
}

interface ContextType {
  address: AddressInterface;
  setRua: (Rua: string) => void;
  setNumero: (Numero: string) => void;
  setCidade: (Cidade: string) => void;
  setUF: (UF: string) => void;
  setCEP: (CEP: string) => void;
  setComplemento: (Complemento: string) => void;
  paymentMethod: paymentMethodInterface;
  setPaymentMethod: (paymentMethod: "" | "credit" | "debit" | "cash") => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const PaymentInformationsContext = createContext({} as ContextType);

export function PaymentInformationsContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [deliverAddress, setDeliverAddress] = useState<AddressInterface>({
    Rua: "",
    Numero: "",
    Bairro: "",
    Cidade: "",
    UF: "",
    CEP: "",
    Complemento: "",
  });

  const [paymentMethod, setPaymentMethod] = useState<paymentMethodInterface>({
    type: "",
  });

  const setPaymentMethodFunc = (
    paymentMethod: "" | "credit" | "debit" | "cash"
  ) => {
    setPaymentMethod({ type: paymentMethod });
  };

  const setRua = (Rua: string) =>
    setDeliverAddress((prev) => ({ ...prev, Rua }));
  const setNumero = (Numero: string) =>
    setDeliverAddress((prev) => ({ ...prev, Numero }));
  const setCidade = (Cidade: string) =>
    setDeliverAddress((prev) => ({ ...prev, Cidade }));
  const setUF = (UF: string) => setDeliverAddress((prev) => ({ ...prev, UF }));
  const setCEP = (CEP: string) =>
    setDeliverAddress((prev) => ({ ...prev, CEP }));
  const setComplemento = (Complemento: string) =>
    setDeliverAddress((prev) => ({ ...prev, Complemento }));

  return (
    <PaymentInformationsContext.Provider
      value={{
        address: deliverAddress,
        paymentMethod: paymentMethod,
        setPaymentMethod: setPaymentMethodFunc,
        setRua,
        setNumero,
        setCidade,
        setUF,
        setCEP,
        setComplemento,
      }}
    >
      {children}
    </PaymentInformationsContext.Provider>
  );
}
