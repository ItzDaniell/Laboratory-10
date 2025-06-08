import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import CategoryFormPage from "./pages/CategoryFormPage";
import SeriePage  from "./pages/SeriePage";
import ForgotPage from "./pages/ForgotPage";
import SerieFormPage from "./pages/SerieFormPage";
import EditCategoryPage from './pages/EditCategoryPage';
<<<<<<< HEAD
import CategoryEditFormPage from "./pages/CategoryEditFormPage";
import imagen1 from "./assets/images/friends.jpg";
import imagen2 from "./assets/images/law-and-order.jpeg";
import imagen3 from "./assets/images/bigbang.avif";
import imagen4 from "./assets/images/strangerthings.jpeg";
import imagen5 from "./assets/images/drhouse.jpeg";
import imagen6 from "./assets/images/thexfile.jpg";
import SerieForm from "./pages/SerieFormPage";
=======
>>>>>>> 77a5657e57add30611842d0a8072524e449eca7e


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/forgot" element={<ForgotPage />} />
        <Route path="/categories" element={<CategoryPage />} />
<<<<<<< HEAD
        <Route path='/categories/new' element={<CategoryFormPage />} />
        <Route path='/categories/edit/:id' element={<CategoryEditFormPage />} />
        <Route path="/series" element={<SeriePage series={series}/>} />
        <Route path="/formSerie" element={<SerieFormPage setSeries={setSeries} series={series} />} />
        <Route path="/series/:id" element={<SerieForm />} />
=======
        <Route path="/series" element={<SeriePage />} />
        <Route path="/formSerie" element={<SerieFormPage />} />
        <Route path="/formSerie/:id" element={<SerieFormPage />} />
>>>>>>> 77a5657e57add30611842d0a8072524e449eca7e
        <Route path="/editar-categoria/:id" element={<EditCategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;