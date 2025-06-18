import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getAllCategoryService } from "../services/categoryService";
import { showSerieService, updateSerieService } from "../services/serieService";
import HeaderComponent from "../components/HeaderComponent";

const initData = {
  id: "",
  name: "",
  rating: "",
  category: "",
  release_date: "",
  image: "",
};

function SerieEditFormPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState(initData);

  const loadCategories = async () => {
    const resp = await getAllCategoryService();
    setCategories(resp.data.results);
  };

  const setDataForm = async () => {
    const resp = await showSerieService(id);
    setData(resp.data);
  };

  useEffect(() => {
    loadCategories();
    setDataForm();
  }, []);

  const debounceTimer = useRef(null);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {}, 500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateSerieService(data.id, data);
      console.log("Enviando", data);
      navigate("/series");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <HeaderComponent />
      <div className="container mt-3">
        <div className="border-bottom pb-3 mb-3">
          <h3>Editar - Serie</h3>
        </div>
        <form onSubmit={handleSubmit} className="row">
          <div className="col-md-8">
            <div className="mb-3">
              <label htmlFor="inputName" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                onChange={onHandleChange}
                name="name"
                className="form-control"
                id="inputName"
                value={data.name}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputCategory" className="form-label">
                Categoria
              </label>
              <select
                onChange={onHandleChange}
                className="form-select"
                name="category"
                id="inputCategory"
                value={data.category}
                required
              >
                <option value="">Seleccione una opción</option>
                {categories.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.description}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="inputRating" className="form-label">
                Rating
              </label>
              <input
                type="number"
                onChange={onHandleChange}
                className="form-control"
                name="rating"
                id="inputRating"
                min="1"
                max="10"
                value={data.rating}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputReleaseDate" className="form-label">
                Fecha de Lanzamiento
              </label>
              <input
                type="date"
                onChange={onHandleChange}
                className="form-control"
                name="release_date"
                id="inputReleaseDate"
                value={data.release_date}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputImage" className="form-label">
                Imagen
              </label>
              <input
                type="url"
                onChange={onHandleChange}
                className="form-control"
                name="image"
                id="inputImage"
                value={data.image}
              />
            </div>
            <div className="mb-3">
              <button className="btn btn-primary me-2">Guardar</button>
              <Link className="btn btn-secondary" to="/series">
                Cancelar
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SerieEditFormPage;
