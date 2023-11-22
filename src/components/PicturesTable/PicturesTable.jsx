import Godzilla from "../../assets/pictures/godzilla.jpeg";
import KingKong from "../../assets/pictures/kingkong.jpeg";
import Xenomorph from "../../assets/pictures/xenomorph.jpeg";
import Megalodon from "../../assets/pictures/megalodon.jpeg";
import KillerCroc from "../../assets/pictures/KillerCroc.jpeg";
import { useState } from "react";
import "./PicturesTable.css";

const characters = [
  {
    id: 1,
    name: "Godzilla",
    src: Godzilla,
  },
  {
    id: 2,
    name: "King Kong",
    src: KingKong,
  },
  {
    id: 3,
    name: "Xenomorph",
    src: Xenomorph,
  },
  {
    id: 4,
    name: "Megalodon",
    src: Megalodon,
  },
  {
    id: 5,
    name: "Killer Croc",
    src: KillerCroc,
  },
];

function PicturesTable() {
  const [monster, setMonster] = useState();
  const handleClick = (element) => {
    const selectedMonster = characters.find(
      (character) => character.id === element
    );
    setMonster(selectedMonster);
  };
  return (
    <div className="monsterContainer">
      {characters.map((character) => (
        <button
          className="monsterButton"
          key={character.id}
          type="button"
          onClick={() => handleClick(character.id)}
        >
          {character.name}
        </button>
      ))}

      {monster && (
        <div>
          <h2 className="monsterTitle">{monster.name}</h2>
          <img src={monster.src} alt={monster.name} className="monsterImg" />
        </div>
      )}
    </div>
  );
}

export default PicturesTable;
