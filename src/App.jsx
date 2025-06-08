import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import SeriePage  from "./pages/SeriePage";
import ForgotPage from "./pages/ForgotPage";
import SerieFormPage from "./pages/SerieFormPage";
import EditCategoryPage from './pages/EditCategoryPage';
import imagen1 from "./assets/images/friends.jpg";
import imagen2 from "./assets/images/law-and-order.jpeg";
import imagen3 from "./assets/images/bigbang.avif";
import imagen4 from "./assets/images/strangerthings.jpeg";
import imagen5 from "./assets/images/drhouse.jpeg";
import imagen6 from "./assets/images/thexfile.jpg";
import SerieForm from "./pages/SerieFormPage";


function App() {
  const [series, setSeries] = useState([
      {cod:1, nom:"Friends", cat:"Comedy", img:imagen1 },
      {cod:2, nom:"Law & Order", cat:"Drama", img:imagen2},
      {cod:3, nom:"The Big Bang Theory", cat:"Comedy", img:imagen3},
      {cod:4, nom:"Stranger Things", cat:"Horror", img:imagen4},
      {cod:5, nom:"Dr. House", cat:"Drama", img:imagen5},
      {cod:6, nom:"The X-Files", cat:"Drama", img:imagen6},
  ]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/forgot" element={<ForgotPage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/series" element={<SeriePage series={series}/>} />
        <Route path="/formSerie" element={<SerieFormPage setSeries={setSeries} series={series} />} />
        <Route path="/series/:id" element={<SerieForm />} />
        <Route path="/editar-categoria/:id" element={<EditCategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;