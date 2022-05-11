import Card from "../Card/Card";
import classNames from "classnames";
import image from "../../Images/image.jpg";

function App() {
  const data = {
    title: "Special title treatment",
    text: "With supporting text below as anatural lead-in to additional content.",
  };
  return (
    <div
      className={classNames(
        "d-flex",
        "justify-content-around",
        "align-items-start",
        "container",
        "my-5"
      )}
    >
      <Card>
        <img src={image} alt="TODO" className="card-img-top" />
      </Card>
      <Card {...data} />
    </div>
  );
}

export default App;
