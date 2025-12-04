export const prontuarioDAO = {
    getByPacienteId(id) {
      const all = JSON.parse(localStorage.getItem("prontuarios") || "[]");
      return all.filter(p => p.pacienteId == id);
    },
  
    addEntry(pacienteId, texto) {
      const all = JSON.parse(localStorage.getItem("prontuarios") || "[]");
      all.push({
        id: Date.now(),
        pacienteId,
        texto,
        data: new Date().toISOString()
      });
      localStorage.setItem("prontuarios", JSON.stringify(all));
    }
  };
  