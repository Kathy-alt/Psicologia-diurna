const semestres = 10; // número de columnas
const ramosPorSemestre = 5; // filas visibles

// Generar encabezados
const encabezados = document.getElementById("encabezados");
for (let i = 1; i <= semestres; i++) {
  const th = document.createElement("th");
  th.textContent = `Semestre ${i}`;
  encabezados.appendChild(th);
}

// Inicializar las filas por índice
for (let i = 0; i < ramosPorSemestre; i++) {
  const fila = document.getElementById(`fila-ramo-${i}`);
  for (let j = 0; j < semestres; j++) {
    const td = document.createElement("td");
    td.id = `celda-${j}-${i}`;
    fila.appendChild(td);
  }
}

// Crear los ramos dentro de su celda por semestre
ramos.forEach((ramo, index) => {
  const semestre = Math.floor(index / ramosPorSemestre);
  const fila = index % ramosPorSemestre;
  const celda = document.getElementById(`celda-${semestre}-${fila}`);

  const div = document.createElement('div');
  div.className = 'ramo bloqueado';
  div.textContent = ramo.nombre;
  div.id = ramo.id;
  div.onclick = () => {
    if (div.classList.contains('bloqueado')) return;
    div.classList.toggle('aprobado');
    actualizarEstado();
  };

  celda.appendChild(div);
});

// Actualiza el estado al cargar
function estaDesbloqueado(ramo) {
  return ramo.requisitos.every(id => document.getElementById(id)?.classList.contains('aprobado'));
}

function actualizarEstado() {
  ramos.forEach(r => {
    const el = document.getElementById(r.id);
    if (!el.classList.contains('aprobado') && estaDesbloqueado(r)) {
      el.classList.remove('bloqueado');
    }
  });
}

actualizarEstado();
