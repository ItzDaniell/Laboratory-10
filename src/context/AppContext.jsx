import React, { useState } from 'react';

const AppContext = React.createContext();
const { Provider } = AppContext;

function AppProvider({ children }){
    const [Usuario, setUsuario] = useState(localStorage.Usuario || null);

    function login(userData){
        const userToSet = userData.username || userData; 
        setUsuario(userToSet);
        localStorage.Usuario = userToSet; 
     
        console.log("Usuario establecido en el contexto y localStorage:", userToSet);
    }

    function logout(){
        setUsuario(null);
        localStorage.removeItem('Usuario');
     
        console.log("Sesión cerrada y datos eliminados de localStorage.");
    }

    return (
        <Provider value={{ Usuario, login, logout }}>
            {children}
        </Provider>
    );
}

export { AppProvider, AppContext }