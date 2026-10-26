import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../MainLayout/MainLayout";
import MainPage from "../../pages/MainPage";
import ShopPage from "../../pages/ShopPage";
import CardPage from "../../pages/CardPage";
import ShoppingCartPage from "../../pages/ShoppingCartPage";
import ContactsPage from "../../pages/ContactsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="shop/:id" element={<CardPage />} />
          <Route path="cart" element={<ShoppingCartPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>

        {/* <Route element={<AuthLayout />}>
            <Route path="login" element={<LoginPage />} />
          </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
