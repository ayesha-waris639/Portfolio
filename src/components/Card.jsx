import Button from "./Button";

function Card({ title, text }) {
  return (
    <div className="card">
      <h2>{title}</h2>

      <p>{text}</p>

      <Button text="Read More" />
    </div>
  );
}

export default Card;