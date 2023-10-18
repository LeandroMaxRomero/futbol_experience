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
                        <p>En esta experiencia podrás conocer la historia de los dos clubes argentinos más grandes: Boca y River...</p>
                        <Link to="experiencia-boca-river" className="btn-vermas"><button>Ver Más</button></Link>
                    </div>
                </div>

            
           
            
            <div className="experiencia">
                <img src="img/Home-Exp-Marado.png" alt="Experiencia Maradona" className="imagen-fondo-experienciaHome"/>
                <div className="exp-maradona">
                    <h3>Experiencia Maradona</h3>
                    <p>En esta experiencia, podrás conocer la intimidad de D10S o como le decían sus amigos, <i>Pelusa</i>. Muchos... </p>
                    <Link to="experiencia-maradona" className="btn-vermas"><button>Ver Más</button></Link>
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
                        <p>In this experience, you will immerse yourself in the history of Argentina´s two biggest clubs: Boca and River, lifelong rivals.</p>
                        <Link to="experiencia-boca-river" className="btn-vermas"><button>More...</button></Link>
                    </div>
                </div>

                <div className="experiencia">
                    <img src="img/Home-Exp-Marado.png" alt="Experiencia Maradona" className="imagen-fondo-experienciaHome"/>
                    <div className="exp-maradona">
                        <h3>Maradona Experience</h3>
                        <p>In this experience you will get to know the intimacy of D10S, or as his friends called him, <i>Pelusa</i>. Many consider him...</p>
                        <Link to="experiencia-maradona" className="btn-vermas"><button>More...</button></Link>
                    </div>
                </div>

        </div>

    </section>
    }

    </>
  )
}
