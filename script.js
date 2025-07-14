const ramos = [
  {
    semestre: 1,
    cursos: [
      { id: 'psico1', nombre: 'Fundamentos de Psicología', requisitos: [] },
      { id: 'bio1', nombre: 'Biología Humana', requisitos: [] },
      { id: 'comu1', nombre: 'Comunicación Oral y Escrita', requisitos: [] },
      { id: 'hist1', nombre: 'Historia de la Psicología', requisitos: [] },
      { id: 'eti1', nombre: 'Ética Profesional', requisitos: [] }
    ]
  },
  {
    semestre: 2,
    cursos: [
      { id: 'neuro1', nombre: 'Neurociencias', requisitos: ['bio1'] },
      { id: 'psico2', nombre: 'Psicología del Desarrollo I', requisitos: ['psico1'] },
      { id: 'inv1', nombre: 'Metodología de la Investigación', requisitos: [] },
      { id: 'cogn1', nombre: 'Procesos Psicológicos Básicos', requisitos: ['psico1'] }
    ]
  },
  {
    semestre: 3,
    cursos: [
      { id: 'psico3', nombre: 'Psicología del Desarrollo II', requisitos: ['psico2'] },
      { id: 'psico4', nombre: 'Psicología Social I', requisitos: ['psico1'] },
      { id: 'eval1', nombre: 'Psicometría', requisitos: ['inv1'] },
      { id: 'cogn2', nombre: 'Psicología Cognitiva', requisitos: ['cogn1'] }
    ]
  },
  {
    semestre: 4,
    cursos: [
      { id: 'psico5', nombre: 'Psicopatología I', requisitos: ['psico3'] },
      { id: 'psico6', nombre: 'Psicología Social II', requisitos: ['psico4'] },
      { id: 'eval2', nombre: 'Evaluación Psicológica I', requisitos: ['eval1'] },
      { id: 'neuro2', nombre: 'Psicobiología', requisitos: ['neuro1'] }
    ]
  },
  {
    semestre: 5,
    cursos: [
      { id: 'psico7', nombre: 'Psicopatología II', requisitos: ['psico5'] },
      { id: 'eval3', nombre: 'Evaluación Psicológica II', requisitos: ['eval2'] },
      { id: 'inv2', nombre: 'Taller de Investigación I', requisitos: ['inv1'] },
      { id: 'integ1', nombre: 'Integración de Saberes I', requisitos: ['psico3', 'psico4'] }
    ]
  },
  {
    semestre: 6,
    cursos: [
      { id: 'psico8', nombre: 'Intervención Psicológica I', requisitos: ['psico7'] },
      { id: 'eval4', nombre: 'Evaluación Psicológica III', requisitos: ['eval3'] },
      { id: 'inv3', nombre: 'Taller de Investigación II', requisitos: ['inv2'] },
      { id: 'integ2', nombre: 'Integración de Saberes II', requisitos: ['integ1'] }
    ]
  },
  {
    semestre: 7,
    cursos: [
      { id: 'psico9', nombre: 'Intervención Psicológica II', requisitos: ['psico8'] },
      { id: 'pract1', nombre: 'Práctica I: Comunitaria', requisitos: ['psico6'] },
      { id: 'inv4', nombre: 'Seminario de Título I', requisitos: ['inv3'] },
      { id: 'integ3', nombre: 'Integración de Saberes III', requisitos: ['integ2'] }
    ]
  },
  {
    semestre: 8,
    cursos: [
      { id: 'psico10', nombre: 'Psicología Jurídica', requisitos: ['psico9'] },
      { id: 'pract2', nombre: 'Práctica II: Clínica', requisitos: ['pract1'] },
      { id: 'inv5', nombre: 'Seminario de Título II', requisitos: ['inv4'] }
    ]
  },
  {
    semestre: 9,
    cursos: [
      { id: 'psico11', nombre: 'Intervención en Crisis', requisitos: ['psico10'] },
      { id: 'pract3', nombre: 'Práctica Profesional I', requisitos: ['pract2'] }
    ]
  },
  {
    semestre: 10,
    cursos: [
      { id: 'pract4', nombre: 'Práctica Profesional II', requisitos: ['pract3'] },
      { id: 'inv6', nombre: 'Tesis de Grado', requisitos: ['inv5'] }
    ]
  }
];

const mallaDiv = document.getElementById('malla');

function estaDesbloqueado(ramo) {
  return ramo.requisitos.every(id => document.getElementById(id)?.classList.contains('aprobado'));
}

function crearRamo(ramo) {
  const div = document.createElement('div');
  div.className = 'ramo bloqueado';
  div.textContent = ramo.nombre;
  div.id = ramo.id;
  div.onclick = () => {
    if (div.classList.contains('bloqueado')) return;
    div.classList.toggle('aprobado');
    actualizarEstado();
  };
  return div;
}

function crearSemestre(semestreObj) {
  const container = document.createElement('div');
  container.className = 'semestre';

  const titulo = document.createElement('h2');
  titulo.textContent = `Semestre ${semestreObj.semestre}`;
  container.appendChild(titulo);

  const fila = document.createElement('div');
  fila.className = 'fila-ramos';

  semestreObj.cursos.forEach(r => {
    const ramoEl = crearRamo(r);
    fila.appendChild(ramoEl);
  });

  container.appendChild(fila);
  mallaDiv.appendChild(container);
}

function actualizarEstado() {
  ramos.forEach(sem => {
    sem.cursos.forEach(r => {
      const el = document.getElementById(r.id);
      if (!el.classList.contains('aprobado') && estaDesbloqueado(r)) {
        el.classList.remove('bloqueado');
      }
    });
  });
}

ramos.forEach(crearSemestre);
actualizarEstado();
