import HeaderComponent from "../components/HeaderComponent"
import SerieComponent from "../components/SerieComponent"
import imagen1 from "../assets/images/friends.jpg"
import imagen2 from "../assets/images/law-and-order.jpeg"
import imagen3 from "../assets/images/bigbang.avif"
import imagen4 from "../assets/images/strangerthings.jpeg"
import imagen5 from "../assets/images/drhouse.jpeg"
import imagen6 from "../assets/images/thexfile.jpg"


function SeriePage(){
    const series = [
        {cod:1, nom:"Friends", cat:"Comedy", img:imagen1 },
        {cod:2, nom:"Law & Order", cat:"Drama", img:imagen2},
        {cod:3, nom:"The Big Bang Theory", cat:"Comedy", img:imagen3},
        {cod:4, nom:"Stranger Things", cat:"Horror", img:imagen4},
        {cod:5, nom:"Dr. House", cat:"Drama", img:imagen5},
        {cod:6, nom:"The X-Files", cat:"Drama", img:imagen6},
      ];


      return (
        <>
            <HeaderComponent />
            <div className="container mt-3">
                <div className="d-flex justify-content-between border-bottom pb-3 mb-3">
                    <h3>Series</h3>
                    <div>
                        <a className="btn btn-primary" href="#">Nuevo</a>
                    </div>
                </div>
                <div className="row">
                    {series.map((serie)=>(
                    <div key={serie.cod} className="col-md-3 mb-3">
                        <SerieComponent
                        	codigo={serie.cod}
                        	nombre={serie.nom}
                        	categoria={serie.cat}
                        	imagen={serie.img}
                        />
                    </div>
                    ))}
                </div>
            </div>
        </>
      )
}


export default SeriePage
