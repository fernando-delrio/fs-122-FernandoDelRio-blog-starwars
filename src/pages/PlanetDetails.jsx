import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../api/BaseUrl";

export default function PlanetDetails() {
  const { uid } = useParams();
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/planets/${uid}`)
      .then(res => res.json())
      .then(data => setPlanet(data.result.properties))
      .catch(err => console.error(err));
  }, [uid]);

  if (!planet) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container mt-4">
      <h1>{planet.name}</h1>

      <ul className="list-group">
        <li className="list-group-item">Climate: {planet.climate}</li>
        <li className="list-group-item">Terrain: {planet.terrain}</li>
        <li className="list-group-item">Population: {planet.population}</li>
        <li className="list-group-item">Gravity: {planet.gravity}</li>
        <li className="list-group-item">Diameter: {planet.diameter}</li>
      </ul>
    </div>
  );
}
