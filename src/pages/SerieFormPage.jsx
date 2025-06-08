import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import { Link } from "react-router-dom";

const initData = {
    id: "",
    name: "",
    category: "",
    image: "",
}

function SerieFormPage({ series, setSeries }) {
    const [data, setData] = useState(initData);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (data.name !== "") {
                console.log("Nombre actualizado:", data.name);
            }
        }, 500); 

        return () => clearTimeout(timer);
    }, [data.name]);

    useEffect(() => {
        if (data.category !== "") {
            console.log("Categoría actualizada:", data.category);
        }
    }, [data.category]);

    useEffect(() => {
        if (data.image !== "") {
            console.log("Imagen seleccionada:", data.image?.name);
        }
    }, [data.image]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevaSerie = {
            cod: series.length + 1,
            nom: data.name,
            cat: data.category,
            img: "https://dummyimage.com/400x250/000/fff",
        };
        setSeries([...series, nuevaSerie]);

        navigate("/series");
    };

    return (
        <>
        <HeaderComponent />
        <form onSubmit={handleSubmit} className="container mt-3">
            <h1>Agregar Serie</h1>
            <div className="mb-3">
                <label htmlFor="inputName" className="form-label">Nombre</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    required
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="inputCategory" className="form-label">Categoría</label>
                <select
                    id="selectCategory"
                    className="form-select"
                    value={data.category}
                    onChange={(e) => setData({ ...data, category: e.target.value })}
                >
                    <option value="">[[ Seleccione una opción ]]</option>
                    <option value="Horror">Horror</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Action">Action</option>
                    <option value="Drama">Drama</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="inputImage" className="form-label">Imagen</label>
                <input
                    type="file"
                    className="form-control"
                    id="inputImage"
                    onChange={(e) => setData({ ...data, image: e.target.files[0] })}
                />
            </div>

            <div className="mb-3 d-flex gap-3">
                <button type="submit" className="btn btn-primary">Guardar</button>
                <Link className="btn btn-danger" to="/series">Volver</Link>
            </div>
        </form>
        </>
    );
}

export default SerieFormPage;