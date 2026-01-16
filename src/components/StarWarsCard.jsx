import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const getImage = (type, uid) => {
  const map = {
    people: "characters",
    planets: "planets",
    vehicles: "vehicles",
  };
  return `https://starwars-visualguide.com/assets/img/${map[type]}/${uid}.jpg`;
};

export default function StarWarsCard({ type, item }) {
  const { store, dispatch } = useGlobalReducer();

  const isFavorite = store.favorites?.some(
    (fav) => fav.uid === item.uid && fav.type === type
  );

  const toggleFavorite = () => {
    dispatch({
      type: "toggle_favorite",
      payload: { uid: item.uid, type, name: item.name },
    });
  };

  return (
    <div className="card" style={{ minWidth: "18rem", width: "18rem" }}>
      <img
        src={getImage(type, item.uid)}
        className="card-img-top"
        alt={item.name}
        style={{ height: "180px", objectFit: "cover" }}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src =
            "https://via.placeholder.com/400x300?text=No+Image";
        }}
      />

      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>

        <div className="d-flex justify-content-between">
          <Link to={`/${type}/${item.uid}`} className="btn btn-outline-primary">
            Learn more
          </Link>

          <button
            type="button"
            className={`btn ${isFavorite ? "btn-warning" : "btn-outline-warning"}`}
            onClick={toggleFavorite}
          >
            ★
          </button>
        </div>
      </div>
    </div>
  );
}
