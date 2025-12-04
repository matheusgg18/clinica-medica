import { useEffect, useState } from "react";
import { getAllMedicos } from "../services/medicoService";

export default function useMedicos() {
  const [medicos, setMedicos] = useState([]);

  useEffect(() => {
    setMedicos(getAllMedicos());
  }, []);

  return medicos;
}
