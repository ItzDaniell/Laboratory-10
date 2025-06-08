import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";
import HeaderComponent from "../components/HeaderComponent";

const initData = {
  name: "",
  release_date: "",
  rating: 0,
  image: "",
  category: "",
};

function SerieFormPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState(initData);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:8000/series/api/v1/categories/");
        setCategories(res.data.results || []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCategories();
  }, []);


  useEffect(() => {
    if (id) {
      const fetchSerie = async () => {
        try {
          const res = await axios.get(`http://localhost:8000/series/api/v1/series/${id}/`);
          setData({
            name: res.data.name,
            release_date: res.data.release_date,
            rating: res.data.rating,
            image: res.data.image || "",
            category: res.data.category.split("/").slice(-2, -1)[0],
          });
        } catch (err) {
          console.error(err);
        }
      };
      fetchSerie();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...data,
        category: `http://localhost:8000/series/api/v1/categories/${data.category}/`, // enviar URL completa
      };

      if (id) {
        await axios.put(`http://localhost:8000/series/api/v1/series/${id}/`, payload);
      } else {
        await axios.post("http://localhost:8000/series/api/v1/series/", payload);
      }
      navigate("/series");
    } catch (err) {
      console.error(err);
      setError("Error al guardar la serie");
    }
  };

  return (
    <>
      <HeaderComponent />
      <div className="container mt-3">
        <h3>{id ? "Editar" : "Nueva"} Serie</h3>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Fecha de lanzamiento</label>
            <input
              type="date"
              name="release_date"
              value={data.release_date}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Rating</label>
            <input
              type="number"
              name="rating"
              value={data.rating}
              min={0}
              max={10}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Imagen (URL)</label>
            <input
              type="text"
              name="image"
              value={data.image}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Categoría</label>
            <select
              name="category"
              value={data.category}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Selecciona una categoría</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.description}
                </option>
              ))}
            </select>
          </div>
          <button className="btn btn-primary me-2" type="submit">
            Guardar
          </button>
          <Link className="btn btn-secondary" to="/series">
            Cancelar
          </Link>
        </form>
      </div>
    </>
  );
}

export default SerieFormPage;
