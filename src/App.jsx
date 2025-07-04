import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import CategoryFormPage from "./pages/CategoryFormPage";
import SeriePage  from "./pages/SeriePage";
import ForgotPage from "./pages/ForgotPage";
import CategoryEditFormPage from "./pages/CategoryEditFormPage";
import SerieFormPage from "./pages/SerieFormPage";
import SerieEditFormPage from './pages/SerieEditFormPage';
import { AppProvider } from "./context/AppContext";


function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/forgot" element={<ForgotPage />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route path='/categories/new' element={<CategoryFormPage />} />
          <Route path='/categories/edit/:id' element={<CategoryEditFormPage />} />

          <Route path="/series" element={<SeriePage />} />
          <Route path="/series/new" element={<SerieFormPage />} />
          <Route path="/series/edit/:id" element={<SerieEditFormPage />} />

        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;