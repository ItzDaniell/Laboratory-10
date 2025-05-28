import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent"; // Asegúrate de la ruta

function SerieFormPage() {
    const { id } = useParams();
    const [data, setData] = useState({
        id: "",
        name: "",
        category: "",
        image: "",
    });
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            console.log(`Cargando datos para la serie con ID: ${id}`);
            setTimeout(() => {
                const serieExistente = {
                    id: id,
                    name: `Nombre de la Serie ${id} (Simulado)`,
                    category: "Simulado",
                    image: `ruta/simulada_${id}.jpg`,
                };
                setData(serieExistente);
                console.log("Datos cargados:", serieExistente);
            }, 300);
        }
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCategoryChange = (e) => {
        setData(prevData => ({
            ...prevData,
            category: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos a guardar:", data);
        // Aquí iría la lógica para guardar
    };

    const handleCancel = () => {
        navigate('/series');
    };

    return (
        <div>
            {/* <HeaderComponent /> */}
            <h1>{id ? `Editar Serie ${id}` : 'Nueva Serie'}</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="inputName" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="inputName" name="name" value={data.name} onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="selectCategory" className="form-label">Categoría</label>
                    <select id="selectCategory" className="form-select" value={data.category} onChange={handleCategoryChange}>
                        <option value="">[[ Seleccione una opción ]]</option>
                        <option value="Horror">Horror</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Action">Action</option>
                        <option value="Drama">Drama</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputImage" className="form-label">Imagen</label>
                    <input type="file" className="form-control" id="inputImage" name="image" />
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Guardar</button>
                    <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancelar</button>
                </div>
            </form>
        </div>
    );
}

export default SerieFormPage;