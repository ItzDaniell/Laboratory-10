import useAuthStore from "../store/authStore";

function HeaderComponent() {
    const user = useAuthStore((state) => state.user);

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
                    {user ? (
                    <div className="d-flex flex-column align-items-end">
                        <strong>{user.username}</strong>
                        <a href="/" className="text-danger">Salir</a>
                    </div>
                    ) : (
                        <a href="/" className="btn btn-outline-primary">Iniciar sesión</a>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default HeaderComponent;
