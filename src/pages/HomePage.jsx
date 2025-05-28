import HeaderComponent from "../components/HeaderComponent"

function HomePage(){
      return (
        <>
            <HeaderComponent />
            <div className="container mt-3">
                <div className="border-bottom pb-3 mb-3">
                    <h3>Home</h3>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h4>Bienvenido a la aplicación de Series</h4>
                        <p>Explora y disfruta de una amplia variedad de series y películas.</p>
                    </div>
                </div>
            </div>
        </>
      )
}

export default HomePage
