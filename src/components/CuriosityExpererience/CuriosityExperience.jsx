const CuriosityExperience = () => {
  return (
    <div className="curiosity-container">
      <h2>¿Sabías que ...</h2>
      <div className="curiosity-container__info">
        <div className="curiosity-container__img img1">
          <img src="./src/img/image 13.png" alt="estadio Argentinos Juniors" />
        </div>

        <div className="curiosity-container-text text1">
          <h3>Argentinos Juniors</h3>
          <p>
            Fundado en 1904 en Buenos Aires, ha sido un semillero de talento.
            Diego Maradona comenzó su carrera profesional acá, dejando una
            huella perdurable. A lo largo de los años, el club ha contribuido al
            fútbol argentino y ha formado jugadores destacados. El estadio Diego
            Armando Maradona, con su nombre, refleja la pasión de los
            aficionados. Argentinos Juniors es un símbolo del fútbol argentino.
          </p>
        </div>

        <div className="curiosity-container__img img2">
          <img
            src="./src/img/jack-hunter-Ph0Aa13k5-c-unsplash 1.png"
            alt="imagen de maradona"
          />
        </div>
        <div className="curiosity-container-text text2">
          <h3>Diego Armando Maradona</h3>
          <p>
            Nacido en 1960, es una leyenda del fútbol. Destacó en el Mundial de
            1986 con la "Mano de Dios" y el "Gol del Siglo". Jugó en Boca
            Juniors, FC Barcelona, entre otros, dejando una marca duradera. Su
            apogeo en el Napoli, donde logró títulos y se convirtió en ícono,
            resalta su genialidad. Maradona trasciende el fútbol, siendo
            recordado por su talento y complejidad humana.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CuriosityExperience;
