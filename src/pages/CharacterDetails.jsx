import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../api/BaseUrl";

export default function CharacterDetails() {
  const { uid } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/people/${uid}`)
      .then(res => res.json())
      .then(data => setCharacter(data.result.properties))
      .catch(err => console.error(err));
  }, [uid]);

  if (!character) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container mt-4">
      <h1>{character.name}</h1>

      <ul className="list-group">
        <li className="list-group-item">Height: {character.height}</li>
        <li className="list-group-item">Mass: {character.mass}</li>
        <li className="list-group-item">Gender: {character.gender}</li>
        <li className="list-group-item">Birth year: {character.birth_year}</li>
      </ul>
    </div>
  );
}
