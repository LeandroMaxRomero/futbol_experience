import { Button } from "../Button/Button";

const ReserveExperience = ({ content }) => {
  return (
    <div className="reserve-experience">
      <h1>{content[0]}</h1>
      <Button className="btn-amarillo">{content[1]}</Button>
    </div>
  );
};

export default ReserveExperience;
