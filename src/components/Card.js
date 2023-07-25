import "./Card.css";
import { convertNumber } from "../utils/convertNumber";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-title">
        <h3 className="pokemon-name">{props.name}</h3>
        <div className="number">{convertNumber(props.number)}</div>
      </div>
      <div>
        <img src={props.image} alt="Bulbasaur" className="pokemon-picture" />
      </div>
      <div className="card-body">
        <div className="pokemon-type">
          <div>{props.type}</div>
        </div>
        <div className="pokemon-desc">{props.description}</div>
      </div>
    </div>
  );
};
export default Card;
