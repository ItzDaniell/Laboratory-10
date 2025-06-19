import { useState } from 'react';
import useAuthStore from '../store/authStore';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      alert('Sesión iniciada correctamente');
      navigate('/home');
    } catch (err) {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <section className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="container">
        <div className="row justify-content-sm-center">
          <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
            <div className="card shadow-lg">
              <div className="card-body p-5">
                <h1 className="fs-4 card-title fw-bold mb-4 text-center">Iniciar Sesión</h1>
                <form onSubmit={handleSubmit} autoComplete="off">
                  <div className="mb-3">
                    <label htmlFor="username" className="mb-2 text-muted">Usuario</label>
                    <input
                      id="username"
                      type="text"
                      className="form-control"
                      name="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      autoFocus
                    />
                  </div>
                  <div className="mb-3">
                    <div className="mb-2 w-100">
                      <label htmlFor="password" className="text-muted">Contraseña</label>
                      <a href="/forgot" className="float-end">
                        ¿Olvidaste tu contraseña?
                      </a>
                    </div>
                    <input
                      id="password"
                      type="password"
                      className="form-control"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="remember" />
                      <label htmlFor="remember" className="form-check-label">Recordarme</label>
                    </div>
                    <button type="submit" className="btn btn-primary ms-auto">
                      Ingresar
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="text-center mt-5 text-muted">
              Copyright &copy; Tecsup 2025
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
