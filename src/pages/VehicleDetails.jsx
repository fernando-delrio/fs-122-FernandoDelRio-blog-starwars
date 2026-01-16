import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../api/BaseUrl";

export default function VehicleDetails() {
  const { uid } = useParams();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/vehicles/${uid}`)
      .then(res => res.json())
      .then(data => setVehicle(data.result.properties))
      .catch(err => console.error(err));
  }, [uid]);

  if (!vehicle) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container mt-4">
      <h1>{vehicle.name}</h1>

      <ul className="list-group">
        <li className="list-group-item">Model: {vehicle.model}</li>
        <li className="list-group-item">Manufacturer: {vehicle.manufacturer}</li>
        <li className="list-group-item">Vehicle class: {vehicle.vehicle_class}</li>
        <li className="list-group-item">Crew: {vehicle.crew}</li>
        <li className="list-group-item">Passengers: {vehicle.passengers}</li>
      </ul>
    </div>
  );
}
