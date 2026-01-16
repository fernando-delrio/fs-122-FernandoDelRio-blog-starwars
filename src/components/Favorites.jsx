import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Favorites = () => {
  const { store, dispatch } = useGlobalReducer();
  const favorites = store.favorites || [];

  const removeFavorite = (fav) => {
    dispatch({ type: "remove_favorite", payload: { uid: fav.uid, type: fav.type } });
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-outline-warning dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        ★ {favorites.length}
      </button>

      <ul className="dropdown-menu dropdown-menu-end">
        {favorites.length === 0 && (
          <li className="dropdown-item text-muted">No favorites</li>
        )}

        {favorites.map((fav) => (
          <li key={`${fav.type}-${fav.uid}`} className="dropdown-item d-flex justify-content-between align-items-center">
            <Link className="text-decoration-none me-3" to={`/${fav.type}/${fav.uid}`}>
              {fav.name}
            </Link>

            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => removeFavorite(fav)}
              type="button"
              title="Remove"
            >
              x
            </button>
          </li>
        ))}

        <li><hr className="dropdown-divider" /></li>

        <li className="dropdown-item">
          <Link to="/favorites" className="text-decoration-none">
            View all
          </Link>
        </li>
      </ul>
    </div>
  );
};
