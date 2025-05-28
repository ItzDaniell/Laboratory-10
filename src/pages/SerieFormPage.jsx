import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";

function handleSubmit(e) {
    e.preventDefault();
    console.log("Formulario enviado", data);
}

const initData = {
    id: "",
    name: "",
    category: "",
    image: "",
}

const {id} = useParams();
const [data, setData] = useState(initData);

function SerieFormPage() {
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="inputName" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="inputTitle" required onChange={onChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="inputCategory" className="form-label">Categoría</label>
                <select id="selectCategory" className="form-select">
                    <option value="">[[ Seleccione una opción ]]</option>
                    <option value="Horror">Horror</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Action">Action</option>
                    <option value="Drama">Drama</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="inputImage" className="form-label">Imagen</label>
                <input type="file" className="form-control" id="inputImage" />
            </div>

            <div className="mb-3">
                <button type="submit" className="btn btn-primary">Guardar</button>
                <button type="reset" className="btn btn-secondary">Cancelar</button>
            </div>
        </form>
    );
}

export default SerieFormPage;