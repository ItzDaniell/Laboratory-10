import HeaderComponent from "../components/HeaderComponent";
import SerieComponent from "../components/SerieComponent";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const seriesAPI = "http://127.0.0.1:8000/series/api/v1/series/";
const categoriesAPI = "http://127.0.0.1:8000/series/api/v1/categories/";

function SeriePage() {
  const [series, setSeries] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [seriesRes, categoriesRes] = await Promise.all([
        axios.get(seriesAPI),
        axios.get(categoriesAPI),
      ]);

      const categoryMap = {};
      categoriesRes.data.results.forEach((cat) => {
        categoryMap[cat.id] = cat.description;
      });

      const seriesWithCategory = seriesRes.data.results.map((serie) => {
        const categoryUrlParts = serie.category.split("/");
        const categoryId = parseInt(
          categoryUrlParts[categoryUrlParts.length - 2]
        );
        return {
          ...serie,
          category_name: categoryMap[categoryId] || "Desconocido",
        };
      });

      setCategories(categoriesRes.data.results);
      setSeries(seriesWithCategory);
    };

    fetchData();
  }, []);


  const handleDelete = async (id) => {
    if (window.confirm('¿Está seguro de eliminar este registro?')) {
      await axios.delete(`${seriesAPI}${id}/`);
      const nLista = series.filter(item => item.id !== id);
      setSeries(nLista);
    }
  };

  return (
    <>
      <HeaderComponent />
      <div className="container mt-3">
        <div className="d-flex justify-content-between border-bottom pb-3 mb-3">
          <h3>Series</h3>
          <div>
            <Link className="btn btn-primary" to="/formSerie">
              Nuevo
            </Link>
          </div>
        </div>
        <div className="row">
          {series.map((serie) => (
            <div key={serie.id} className="col-md-3 mb-3">
              <SerieComponent
                codigo={serie.id}
                nombre={serie.name}
                categoria={serie.category_description}
                imagen={"serie.png"}
                lista={serie}
                actualizarLista={setSeries}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SeriePage;