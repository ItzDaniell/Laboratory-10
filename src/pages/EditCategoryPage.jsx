import HeaderComponent from "../components/HeaderComponent";
import { useParams, useNavigate } from "react-router-dom";

function EditCategoryPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    alert(`Categoría ${id} editada correctamente`);
    navigate("/categories");
  };

  return (
    <>
      <HeaderComponent />
      <div className="container mt-3">
        <h3>Editar Categoría {id}</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input type="text" className="form-control" defaultValue="" />
          </div>
          <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
      </div>
    </>
  );
}

export default EditCategoryPage;
