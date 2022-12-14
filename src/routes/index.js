// Paso1: Importar los componentes de React Router DOM

import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pas2: Importar nuestras vistas
import {
  HomeView,
  LoginView,
  RegisterView,
  ProfileView,
  InterfaceView,
  LandingPageView,
  ProductView,
  CartView,
  FormContactView
} from "../pages";

import { MainLayout } from "../layout";

// path => Nombre de la ruta /, /login, /registro

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/landing" element={<LandingPageView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/product" element={<ProductView />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/FormContact" element={< FormContactView/>} />
        </Route>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
