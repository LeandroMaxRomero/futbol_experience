import { useContext } from "react";
import { LenguaContext } from "../../context/LenguaProvider";
import { Link } from "react-router-dom";

export const Experiencias = () => {
    const useLengua = () => useContext(LenguaContext);
    const { lang } = useLengua();
  return (
    <>
    {
    lang === 'castellano'
    ?
    <section className="container-experiencias">
        <h2>Nuestras experiencias</h2>
        <div className="divisor"></div>
        <div className="experiencias">

            


                <div className="experiencia">
                    <img src="img/Home-Exp-RivBoc.png" alt="Experiencia Boca Juniors River Plate" className="imagen-fondo-experienciaHome"/>
                    <div className="exp-boca-river">
                        <h3>Experiencia Boca - River</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam tellus, maximus vitae massa et...</p>
                        <Link to="experiencia-boca-river"><button>Ver Más</button></Link>
                    </div>
                </div>

            
           
            
            <div className="experiencia">
                <img src="img/Home-Exp-Marado.png" alt="Experiencia Maradona" className="imagen-fondo-experienciaHome"/>
                <div className="exp-maradona">
                    <h3>Experiencia Maradona</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam tellus, maximus vitae massa et...</p>
                    <Link to="experiencia-maradona"><button>Ver Más</button></Link>
                </div>
            </div>

        </div>

    </section>
    :
    <section className="container-experiencias">
        <h2>Our experiences</h2>
        <div className="divisor"></div>
        <div className="experiencias">

            


                <div className="experiencia">
                    <img src="img/Home-Exp-RivBoc.png" alt="Experiencia Boca Juniors River Plate" className="imagen-fondo-experienciaHome"/>
                    <div className="exp-boca-river">
                        <h3>Boca - River Experience</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam tellus, maximus vitae massa et...</p>
                        <Link to="experiencia-boca-river"><button>More..</button></Link>
                    </div>
                </div>

            
           
            
            <div className="experiencia">
                <img src="img/Home-Exp-Marado.png" alt="Experiencia Maradona" className="imagen-fondo-experienciaHome"/>
                <div className="exp-maradona">
                    <h3>Maradona Experience</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam tellus, maximus vitae massa et...</p>
                    <Link to="experiencia-maradona"><button>More...</button></Link>
                </div>
            </div>

        </div>

    </section>
    }

    </>
  )
}
