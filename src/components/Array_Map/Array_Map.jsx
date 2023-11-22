import Porcky from "../../assets/Porcky.jpg";
import Meumeu from "../../assets/Meumeu.jpg";
import Sharky from "../../assets/Sharky.jpg";

const animals = [
  { name: "Porcky", color: "Pink and White", species: "pig", src: Porcky},
  { name: "Meumeu", color: "Black and White", species: "cow", src: Meumeu },
  { name: "Sharky", color: "Grey and White", src: Sharky },
];

const Array_Map = () => {
  return (
    <>
      {animals.map((animal) => (
        <div key={animal.name} className="animalCard">
          <p>My name is {animal.name}</p>
          <p>And my colors are {animal.color}</p>
          <p>I am a/an {animal.species}</p>
          <img src={animal.src} alt={animal.name} className="animalPicture" />
        </div>
      ))}
    </>
  );
};

export default Array_Map;
