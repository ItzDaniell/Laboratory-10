import React, { useState } from 'react'

const AppContext = React.createContext();
const { Provider } = AppContext;


function AppProvider({ children }){
    const [Usuario, setUsuario] = useState(localStorage.Usuario);

    function login(data){
        setUsuario(data.username)
        localStorage.Usuario = data.username
    }

    function logout(data){
        setUsuario(null)
        localStorage.removeItem = ('Usuario');
    }

    return (
        <Provider value={[Usuario, login, logout]}>
            {children}
        </Provider>
    );
}

export { AppProvider, AppContext}
