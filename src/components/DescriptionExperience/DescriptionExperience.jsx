import PropTypes from "prop-types";

const DescriptionExperience = ({ content }) => {
  return (
    <div className="block-description">
      <section className="block-description__routes">
        <img src={content[0]} alt="itinerario" />
      </section>
      <section className="block-description__imgs">
        <div className="contenedor-description__imgs">
          <img key={1} src={content[1]} alt="casa maradona" />
        </div>
        <div className="contenedor-description__imgs">
          <img key={2} src={content[2]} alt="casa de maradona interior" />
        </div>
        <div className="contenedor-description__imgs">
          <img key={3} src={content[3]} alt="playeras de maradona en pared" />
        </div>
        <div className="contenedor-description__imgs">
          <img key={4} src={content[4]} alt="caricatura de maradona en pared" />
        </div>
      </section>
    </div>
  );
};
DescriptionExperience.propTypes = {
  content: PropTypes.node.isRequired,
};

export default DescriptionExperience;
