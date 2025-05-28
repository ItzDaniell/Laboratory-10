import HeaderComponent from "../components/HeaderComponent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CategoryPage() {
  const [categories, setCategories] = useState([
    { cod: 1, nom: "Horror" },
    { cod: 2, nom: "Comedy" },
    { cod: 3, nom: "Action" },
    { cod: 4, nom: "Drama" },
  ]);

  const navigate = useNavigate();

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("¿Seguro que quieres eliminar esa categoría?");
    if (confirmDelete) {
      const newList = categories.filter((cat) => cat.cod !== id);
      setCategories(newList); // Actualiza la lista quitando la categoría
    }
  };

  const handleEdit = (id) => {
    navigate(`/editar-categoria/${id}`);
  };

  return (
    <>
      <HeaderComponent />
      <div className="container mt-3">
        <div className="border-bottom pb-3 mb-3">
          <h3>Categorías</h3>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th className="text-center">Id</th>
              <th className="text-center" style={{ width: "100px" }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((item) => (
              <tr key={item.cod}>
                <td>{item.nom}</td>
                <td className="text-center">{item.cod}</td>
                <td className="text-center">
                  <button
                    className="btn btn-secondary me-2 btn-sm"
                    onClick={() => handleEdit(item.cod)}
                  >
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(item.cod)}
                  >
                    <i className="bi bi-trash-fill"></i>
                  </button>
                </td>
              </tr>
            ))}
            {categories.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center">No hay categorías.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CategoryPage;
