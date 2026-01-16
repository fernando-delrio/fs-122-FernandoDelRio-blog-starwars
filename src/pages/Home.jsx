import { useEffect, useState } from "react";
import { BASE_URL } from "../api/BaseUrl";
import StarWarsCard from "../components/StarWarsCard";

export default function Home() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/people`)
      .then(res => res.json())
      .then(data => setPeople(data.results))
      .catch(err => console.error(err));

    fetch(`${BASE_URL}/planets`)
      .then(res => res.json())
      .then(data => setPlanets(data.results))
      .catch(err => console.error(err));

    fetch(`${BASE_URL}/vehicles`)
      .then(res => res.json())
      .then(data => setVehicles(data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">

      <h2>Characters</h2>
      <div className="d-flex gap-3 overflow-auto mb-4 pb-2">
        {people.map(p => (
          <StarWarsCard key={p.uid} type="people" item={p} />
        ))}
      </div>

      <h2>Planets</h2>
      <div className="d-flex gap-3 overflow-auto mb-4">
        {planets.map(p => (
          <StarWarsCard key={p.uid} type="planets" item={p} />
        ))}
      </div>

      <h2>Vehicles</h2>
      <div className="d-flex gap-3 overflow-auto mb-4">
        {vehicles.map(v => (
          <StarWarsCard key={v.uid} type="vehicles" item={v} />
        ))}
      </div>

    </div>
  );
}
