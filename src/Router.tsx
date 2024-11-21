import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Checkout } from "./pages/Checkout/Checkout";
import { Home } from "./pages/Home/Home";
import { PurchaseConfirmed } from "./pages/PurchaseConfirmed/PurchaseConfirmed";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/check-out" element={<Checkout />} />
          <Route path="/confirmed" element={<PurchaseConfirmed />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
