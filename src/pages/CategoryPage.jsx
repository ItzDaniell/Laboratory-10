import HeaderComponent from "../components/HeaderComponent";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CategoryPage() {
  const navigate = useNavigate();

const handleDelete = async (id) => { 
        const confirmDelete = window.confirm("¿Seguro que quieres eliminar esa categoría?");
        if (confirmDelete) {
            try {
              
                await axios.delete(`${urlAPI}${id}/`); 
                console.log(`Categoría con ID ${id} eliminada en el backend.`);

                const newList = categories.filter((item) => item.id !== id);
                setCategories(newList);
                alert("Categoría eliminada exitosamente."); 
            } catch (error) {
                console.error("Error al eliminar la categoría:", error);
                alert("Hubo un error al eliminar la categoría. Por favor, intente de nuevo."); 
            }
        }
    };

  const handleEdit = (id) => {
    navigate(`/editar-categoria/${id}`);
  };

  const urlAPI = 'http://127.0.0.1:8000/series/api/v1/categories/'
  
  const [categories, setCategories] = useState([]);

  const loadData = async () => {
    const resp = await axios.get(urlAPI);
    console.log(resp.data.results)
    setCategories(resp.data.results)
  };

  useEffect(() =>{
    loadData();
  }, [])

  return (
    
    <>
      <HeaderComponent />
      <div className="container mt-3">
        <div className="border-bottom pb-3 mb-3">
          <h3>Categorías</h3>
            <div>
                <Link className="btn btn-primary" to="/categories/new">Nuevo</Link>
            </div>
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
              <tr key={item.id}>
                <td>{item.description}</td>
                <td className="text-center">{item.id}</td>
                <td className="text-center">
                  <button
                    className="btn btn-secondary me-2 btn-sm"
                    onClick={() => handleEdit(item.id)}
                  >
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(item.id)}
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
