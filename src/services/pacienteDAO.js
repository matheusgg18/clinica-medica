export const pacienteDAO = {
    getAll() {
      return JSON.parse(localStorage.getItem("pacientes") || "[]");
    },
  
    save(paciente) {
      const list = this.getAll();
      list.push({ id: Date.now(), ...paciente });
      localStorage.setItem("pacientes", JSON.stringify(list));
    },
  
    login(email, senha) {
      return this.getAll().find(u => u.email === email && u.senha === senha);
    }
  };
  