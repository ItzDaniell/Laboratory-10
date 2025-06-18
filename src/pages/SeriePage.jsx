import HeaderComponent from "../components/HeaderComponent";
import SerieComponent from "../components/SerieComponent";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const seriesAPI = "http://127.0.0.1:8000/series/api/v1/series/";

function SeriePage() {
  const [series, setSeries] = useState([]);

  const loadData = async () => {
    const resp = await axios.get(seriesAPI);
    console.log(resp.data.results);
    setSeries(resp.data.results);
  };

  useEffect(() => {
    loadData();
  }, []);


  return (
    <>
      <HeaderComponent />
      <div className="container mt-3">
        <div className="d-flex justify-content-between border-bottom pb-3 mb-3">
          <h3>Series</h3>
          <div>
            <Link className="btn btn-primary" to="/series/new">
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
                imagen={serie.image}
                lista={series}
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