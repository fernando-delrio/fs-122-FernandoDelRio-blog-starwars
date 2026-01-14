import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
  return (
    <div style={{ padding: "20px" }}>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Lista de Contactos</Link>
        <Link to="/create">Crear Contacto</Link>
      </nav>
      
      <Outlet />
    </div>
  );
};