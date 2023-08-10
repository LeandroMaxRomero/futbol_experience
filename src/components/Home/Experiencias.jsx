import { useContext } from "react";
import { LenguaContext } from "../../context/LenguaProvider";


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
            <div className="experiencia boca-river">
                <h3>Experiencia Boca - River</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam tellus, maximus vitae massa et...</p>
            <button>Ver Más</button>
            </div>
            <div className="experiencia maradona">
            <h3>Experiencia Maradona</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam tellus, maximus vitae massa et...</p>
            <button>Ver Más</button>
            </div>
        </div>

    </section>
    :
    <section className="container-experiencias">
        <h2>Our experiences</h2>
        <div className="divisor"></div>
        <div className="experiencias">
            <div className="experiencia boca-river">
                <h3>Boca - River Experience</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam tellus, maximus vitae massa et...</p>
            <button>More...</button>
            </div>
            <div className="experiencia maradona">
            <h3>Maradona Experience</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam tellus, maximus vitae massa et...</p>
            <button>More...</button>
            </div>
        </div>
    </section>
    }

    </>
  )
}
