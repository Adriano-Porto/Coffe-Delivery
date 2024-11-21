import { ThemeProvider } from "styled-components";
import { PaymentInformationsContextProvider } from "./context/PaymentInformationsContext";
import { ShoppingCartContextProvider } from "./context/ShoppingCartContext";
import { Router } from "./Router";
import { defaultTheme } from "./styles/themes/default";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ShoppingCartContextProvider>
        <PaymentInformationsContextProvider>
          <Router />
        </PaymentInformationsContextProvider>
      </ShoppingCartContextProvider>
    </ThemeProvider>
  );
};

export default App;
