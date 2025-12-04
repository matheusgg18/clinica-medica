const STORAGE_KEY = "medicos_v1";

export function getAllMedicos() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function saveMedico(medico) {
  const list = getAllMedicos();
  list.push(medico);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

export function updateMedico(id, updated) {
  const list = getAllMedicos().map((m) => (m.id === id ? updated : m));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

export function deleteMedico(id) {
  const list = getAllMedicos().filter((m) => m.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}
