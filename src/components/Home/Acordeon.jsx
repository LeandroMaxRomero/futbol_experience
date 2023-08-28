import PropTypes from "prop-types";

export const Acordeon = ({tittle, contenido, active, setActive}) => {

  return (
    <div className="accordion">

        <div className="accordionHeading">
            <div className="containerTitle">
                <span onClick={() => setActive(tittle)}>
                    {active === tittle
                    ?
                    <svg width="25" height="62" viewBox="0 0 25 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.7559 36L11.7559 30L5.75586 36L3.75586 34L11.7559 26L19.7559 34L17.7559 36Z" fill="#0B2933" stroke="#0B2933" strokeWidth="2"/>
                    </svg>
                    :
                    <svg width="25" height="62" viewBox="0 0 25 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.7559 26L11.7559 32L5.75586 26L3.75586 28L11.7559 36L19.7559 28L17.7559 26Z" fill="#0B2933" stroke="#0B2933" strokeWidth="2"/>
                    </svg>
                    }
                </span>
                <h3 onClick={() => setActive(tittle)}>{tittle}</h3>
            </div>
        </div>
            
        <div className={(active === tittle ? "show" : "") + " accordionContent"}>
            <div className="containerTitle">
                <p className="cont-despl">{contenido}</p>
            </div>
        </div>

    </div>
  )
}

Acordeon.propTypes = {
  tittle: PropTypes.string.isRequired,
  contenido: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
};
