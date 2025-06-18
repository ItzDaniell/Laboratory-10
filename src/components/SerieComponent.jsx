import { Link } from "react-router-dom";
import { deleteSerieService } from "../services/serieService";

function SerieComponent(props) {

  const handleDelete = async (codigo) => {
    if (window.confirm(`¿Está seguro de eliminar este registro?`)) {
      await deleteSerieService(codigo);
      const nLista = props.lista.filter((item) => item.id !== codigo);
      props.actualizarLista(nLista);
    }
  };

  return (
    <div className="card">
      <img className="card-img-top h-75" src={props.imagen} alt="img" />
      <div className="card-body">
        <h5 className="card-title">{props.nombre}</h5>
        <p className="card-text">{props.categoria}</p>
        <div className="d-flex justify-content-between">
          <Link
            className="btn btn-secondary"
            to={`/series/edit/${props.codigo}`}
          >
            Editar
          </Link>
          <button
            onClick={() => handleDelete(props.codigo)}
            className="btn btn-danger"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default SerieComponent;
