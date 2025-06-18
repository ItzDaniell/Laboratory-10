import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function HeaderComponent() {
    const { usuario, logout } = useContext(AppContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">SeriesApp</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/home">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/categories">Categorías</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/series">Series</a>
                        </li>
                    </ul>
                    <div>
                        Bienvenido {Usuario ? Usuario.name : 'Invitado'}
                        <div className="text-end">
                            <button onClick={handleLogout} className="btn btn-link">Salir</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default HeaderComponent;
