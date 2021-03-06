import "./style.css";
import CharCard from "../CharCard";

function Characters({ characterList }) {
  return (
    <>
      <h1>Meus Personagens</h1>
      {characterList.map((character) => (
        <div key={character.id} className="card">
          <CharCard
            name={character.name}
            status={character.status}
            image={character.image}
          />
        </div>
      ))}
    </>
  );
}

export default Characters;
