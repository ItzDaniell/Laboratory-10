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

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/forgot" element={<ForgotPage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/series" element={<SeriePage />} />
        <Route path="/formSerie" element={<SerieFormPage />} />
        <Route path="/editar-categoria/:id" element={<EditCategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;