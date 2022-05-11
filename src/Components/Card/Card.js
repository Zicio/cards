/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from "classnames";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      {props.children}
      <div className="card-body">
        <h5 className="card-tittle">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a className={classNames("btn", "btn-primary")} href="#">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

Card.defaultProps = {
  title: "Card title",
  text: "Some quick example text to build on the card title make up the bulk of the card's content.",
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;
