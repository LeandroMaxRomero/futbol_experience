import PropTypes from "prop-types";

const DescriptionExperience = ({ content }) => {
  return (
    <div className="block-description">
      <section className="block-description__routes">
        <img src={content[0]} alt="itinerario" />
      </section>
      <section className="block-description__imgs">
        <img src={content[1]} alt="casa maradona" />
        <img src={content[2]} alt="casa de maradona interior" />
        <img src={content[3]} alt="playeras de maradona en pared" />
        <img src={content[4]} alt="caricatura de maradona en pared" />
      </section>
    </div>
  );
};
DescriptionExperience.propTypes = {
  content: PropTypes.node.isRequired,
};

export default DescriptionExperience;
