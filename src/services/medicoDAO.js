export const medicoDAO = {
    getAll() {
      return JSON.parse(localStorage.getItem("medicos") || "[]");
    },
  
    save(medico) {
      const list = this.getAll();
      list.push({ id: Date.now(), ...medico });
      localStorage.setItem("medicos", JSON.stringify(list));
    },
  
    login(email, senha) {
      return this.getAll().find(u => u.email === email && u.senha === senha);
    }
  };
  