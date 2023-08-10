import { useContext } from "react";
import { LenguaContext } from "../../context/LenguaProvider";


export const Prestaciones = () => {
  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();

  // const textoImagenes = {
  //   Esp:{
  //     img1: "Experiencia inolvidable",
  //     img2: "Camiseta de regalo",
  //     img3: "Comida local",
  //     img4: "Transporte incluido"
  //   },
  //   Ingl:{
  //     img1: "Unforgetable experience",
  //     img2: "Gift t-shirt",
  //     img3: "Local foods",
  //     img4: "Transportation included"
  //   }
  // }

  return (
    <>
    {
        lang==='castellano'
        ?
        <section className="container-prestaciones">
          <div className="prestaciones-box prestacionesUno">
            Experiencia<br></br>inolvidable
          </div>
          <div className="prestaciones-box prestacionesDos">
              Camiseta<br></br>de regalo
          </div>
          <div className="prestaciones-box prestacionesTres">
            Comida<br></br>local
          </div>
          <div className="prestaciones-box prestacionesCuatro">
            Transporte<br></br>incluido
          </div>
        </section>
        :
        <section className="container-prestaciones">
          <div className="prestaciones-box prestacionesUno">
            Unforgetable<br></br>experience
          </div>
          <div className="prestaciones-box prestacionesDos">
              Gift<br></br>t-shirt
          </div>
          <div className="prestaciones-box prestacionesTres">
            Local<br></br>foods
          </div>
          <div className="prestaciones-box prestacionesCuatro">
            Transportation<br></br>included
          </div>
        </section>
    }

    </>
  )
}
