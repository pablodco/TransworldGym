import { useEffect, useState } from "react";
import API from "../services/api";

export default function Clases() {
  const [clases, setClases] = useState([]);

  useEffect(() => {
    API.get("/clases/")
      .then(res => setClases(res.data))
      .catch(() => alert("Error al cargar clases"));
  }, []);

  return (
    <div>
      <h2>Clases disponibles</h2>
      <ul>
        {clases.map(clase => (
          <li key={clase.id}>{clase.nombre} - {clase.hora}</li>
        ))}
      </ul>
    </div>
  );
}
