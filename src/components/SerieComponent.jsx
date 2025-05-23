function SerieComponent(props) {
    return (
        <div className="card">
            <img 
                className="card-img-top h-75" 
                src={props.imagen} 
                alt="img" />
            <div className="card-body">
                <h5 className="card-title">{props.nombre}</h5>
                <p className="card-text">{props.categoria}</p>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-secondary">Editar</button> 
                    <button className="btn btn-danger">Eliminar</button>
                </div>
            </div>
        </div>
    )
}
  
export default SerieComponent
