import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/login";
import { PrivacyPolicyPage } from "../pages/privacyPolicy";
import { RegisterPage } from "../pages/register";
import AdminDashboard from "../pages/admin";
import CategoriesAndBrands from "../pages/admin/categoriesAndBrands";
import AdminProducts from "../components/admin/products";
import Bag from "../pages/bag";
import BagProducts from "../pages/bagProducts";
import BagAddressAndDelivery from "../pages/bagAddressAndDelivery";
import RetrieveAccount from "../pages/retrieveAccount";
import Profile from "../pages/profile";
import Orders from "../pages/orders";
import User from "../pages/user";
import Preference from "../pages/preference";
import Data from "../pages/data";
import Address from "../pages/address";
import Initial from "../pages/initial";
import UniqueProduct from "../pages/uniqueProduct";
import AdminUsers from "../components/admin/users";
import SearchProducts from "../pages/searchPage";
import ProductsList from "../pages/products";
import { AuthAdminProvider } from "../context/admin.context";

const Routers = () => {
  return (
    <Routes>
      <Route path="sessao" element={<LoginPage />} />
      <Route path="cadastro" element={<RegisterPage />} />
      <Route path="privacidade" element={<PrivacyPolicyPage />} />
      <Route path="recuperar-conta" element={<RetrieveAccount />} />

      <Route path="perfil/:userId?" element={<Profile />}>
        <Route index element={<Orders />} />
        <Route path="usuario" element={<User />} />
        <Route path="preferencias" element={<Preference />} />
        <Route path="dados-bancarios" element={<Data />} />
        <Route path="enderecos" element={<Address />} />
      </Route>

      <Route path="inicio" element={<Initial />} />
      <Route path="produtos/todos" element={<ProductsList />} />
      <Route path="produtos/pesquisa" element={<SearchProducts />} />
      <Route path="produtos/:productId" element={<UniqueProduct />} />

      <Route
        path="admin"
        element={
          <AuthAdminProvider>
            <AdminDashboard />
          </AuthAdminProvider>
        }
      >
        <Route
          index
          element={
            <AuthAdminProvider>
              <CategoriesAndBrands />
            </AuthAdminProvider>
          }
        />
        <Route
          path="inicio"
          element={
            <AuthAdminProvider>
              <CategoriesAndBrands />
            </AuthAdminProvider>
          }
        />
        <Route
          path="produtos"
          element={
            <AuthAdminProvider>
              <AdminProducts />
            </AuthAdminProvider>
          }
        />
        <Route
          path="usuarios"
          element={
            <AuthAdminProvider>
              <AdminUsers />
            </AuthAdminProvider>
          }
        />
      </Route>

      <Route path="carrinho" element={<Bag />}>
        <Route index element={<BagProducts />} />
        <Route path="endereco-frete" element={<BagAddressAndDelivery />} />
      </Route>

      <Route path="*" element={<Initial />} />
    </Routes>
  );
};

export default Routers;
