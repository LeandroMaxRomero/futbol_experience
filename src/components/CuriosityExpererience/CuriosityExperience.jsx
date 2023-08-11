const CuriosityExperience = ({ content }) => {
  return (
    <div className="curiosity-container">
      <h2>{content[0]}</h2>
      <div className="curiosity-container__info">
        <div className="curiosity-container__img img1">
          <img src={content[1]} alt="estadio Argentinos Juniors" />
        </div>

        <div className="curiosity-container-text text1">
          <h3>{content[2]}</h3>
          <p>{content[3]}</p>
        </div>

        <div className="curiosity-container__img img2">
          <img src={content[4]} alt="imagen de maradona" />
        </div>
        <div className="curiosity-container-text text2">
<<<<<<< HEAD
          <h3>Diego Armando Maradona</h3>
          <p>
            Nacido en 1960, es una leyenda del fútbol. Destacó en el Mundial de
            1986 con la `Mano de Dios` y el `Gol del Siglo`. Jugó en Boca
            Juniors, FC Barcelona, entre otros, dejando una marca duradera. Su
            apogeo en el Napoli, donde logró títulos y se convirtió en ícono,
            resalta su genialidad. Maradona trasciende el fútbol, siendo
            recordado por su talento y complejidad humana.
          </p>
=======
          <h3>{content[5]}</h3>
          <p>{content[6]}</p>
>>>>>>> river
        </div>
      </div>
    </div>
  );
};

export default CuriosityExperience;
