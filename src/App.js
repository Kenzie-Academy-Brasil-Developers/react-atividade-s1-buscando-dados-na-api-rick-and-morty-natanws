import Characters from "./components/Characters";
import { useState, useEffect } from "react";

function App() {
  const [characterList, setCharacterList] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results))
      .catch((err) => console.log(err));
  }, []);

  console.log(characterList);

  return (
    <div className="container">
      <Characters characterList={characterList} />
    </div>
  );
}

export default App;
