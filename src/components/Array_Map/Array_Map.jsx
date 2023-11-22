import Porcky from "../../assets/Porcky.jpg";
import Meumeu from "../../assets/Meumeu.jpg";
import Sharky from "../../assets/Sharky.jpg";
import "../Array_Map/Array_Map.css";

const animals = [
  { name: "Porcky", color: "Pink and White", species: "pig", src: Porcky},
  { name: "Meumeu", color: "Black and White", species: "cow", src: Meumeu },
  { name: "Sharky", color: "Grey and White", src: Sharky },
];

const Array_Map = () => {
  return (
    <article className="animal_container">
      {animals.map((animal) => (
        <div key={animal.name} className="animal_card">
          <p>My name is <div className="animal_name">{animal.name}</div></p>
          <p>And my colors are {animal.color}</p>
          <p>I am a/an {animal.species}</p>
          <img src={animal.src} alt={animal.name} className="animal_picture" />
        </div>
      ))}
    </article>
  );
};

export default Array_Map;
