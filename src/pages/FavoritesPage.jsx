import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

export default function FavoritesPage() {
  const { store, dispatch } = useGlobalReducer();
  const favorites = store.favorites || [];

  const removeFavorite = (fav) => {
    dispatch({ type: "remove_favorite", payload: { uid: fav.uid, type: fav.type } });
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-3">Favorites</h1>

      {favorites.length === 0 ? (
        <p className="text-muted">No favorites yet.</p>
      ) : (
        <ul className="list-group">
          {favorites.map((fav) => (
            <li
              key={`${fav.type}-${fav.uid}`}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <Link to={`/${fav.type}/${fav.uid}`} className="text-decoration-none">
                {fav.name}
              </Link>

              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => removeFavorite(fav)}
                type="button"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
