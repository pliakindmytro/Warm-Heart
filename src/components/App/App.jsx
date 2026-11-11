import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../MainLayout/MainLayout";
import MainPage from "../../pages/MainPage";
import ShopPage from "../../pages/ShopPage";
import CardPage from "../../pages/CardPage";
import ShoppingCartPage from "../../pages/ShoppingCartPage";
import ContactsPage from "../../pages/ContactsPage";
import AuthPage from "../../pages/AuthPage";

import { LastViewedProvider } from "../../contexts/LastViewedContext";

function App() {
  return (
    <LastViewedProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<MainPage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="shop/:id" element={<CardPage />} />
            <Route path="cart" element={<ShoppingCartPage />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="login" element={<AuthPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LastViewedProvider>
  );
}

export default App;
