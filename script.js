const ramos = [
  // SEMESTRE 1
  { id: 'hist_fund', nombre: 'Historia y Fundamentos de la Psicología', requisitos: [] },
  { id: 'neuro1', nombre: 'Tópicos de Neurobiología', requisitos: [] },
  { id: 'sociedad', nombre: 'Psicología y Sociedad', requisitos: [] },
  { id: 'ing1', nombre: 'Inglés 1', requisitos: [] },
  { id: 'eje1', nombre: 'Eje Interdisciplinario 1', requisitos: [] },

  // SEMESTRE 2
  { id: 'sistemas', nombre: 'Sistemas Psicológicos', requisitos: ['hist_fund'] },
  { id: 'proc_neuro', nombre: 'Procesos Psicológicos y Neurociencias', requisitos: ['neuro1'] },
  { id: 'epist', nombre: 'Psicología y Epistemología', requisitos: ['hist_fund'] },
  { id: 'ing2', nombre: 'Inglés 2', requisitos: ['ing1'] },
  { id: 'comunic', nombre: 'Habilidades Comunicativas', requisitos: [] },

  // SEMESTRE 3
  { id: 'psicoa1', nombre: 'Psicoanálisis I', requisitos: ['sistemas'] },
  { id: 'des1', nombre: 'Psicología del Desarrollo I', requisitos: ['sistemas'] },
  { id: 'inv1', nombre: 'Investigación I', requisitos: [] },
  { id: 'ing3', nombre: 'Inglés 3', requisitos: ['ing2'] },
  { id: 'tic', nombre: 'Razonamiento Científico y TICs', requisitos: [] },

  // SEMESTRE 4
  { id: 'psicoa2', nombre: 'Psicoanálisis II', requisitos: ['psicoa1'] },
  { id: 'des2', nombre: 'Psicología del Desarrollo II', requisitos: ['des1'] },
  { id: 'inv2', nombre: 'Investigación II', requisitos: ['inv1'] },
  { id: 'ing4', nombre: 'Inglés 4', requisitos: ['ing3'] },
  { id: 'eje2', nombre: 'Eje Interdisciplinario 2', requisitos: ['eje1'] },

  // SEMESTRE 5
  { id: 'diag1', nombre: 'Psicodiagnóstico Clínico I', requisitos: ['psicoa2'] },
  { id: 'psiq1', nombre: 'Psicopatología y Psiquiatría I', requisitos: ['des2'] },
  { id: 'integ1', nombre: 'Taller de Integración', requisitos: ['inv2'] },
  { id: 'social', nombre: 'Psicología Social', requisitos: [] },
  { id: 'eje3', nombre: 'Eje Interdisciplinario 3', requisitos: ['eje2'] },

  // SEMESTRE 6
  { id: 'diag2', nombre: 'Psicodiagnóstico Clínico II', requisitos: ['diag1'] },
  { id: 'psiq2', nombre: 'Psicopatología y Psiquiatría II', requisitos: ['psiq1'] },
  { id: 'educa', nombre: 'Psicología Educacional', requisitos: [] },
  { id: 'social2', nombre: 'Diagnóstico e Intervención Social', requisitos: ['social'] },
  { id: 'trab_org', nombre: 'Psicología del Trabajo y Organizaciones', requisitos: [] },

  // SEMESTRE 7
  { id: 'sistemica', nombre: 'Clínica Sistémica', requisitos: ['diag2'] },
  { id: 'infanto1', nombre: 'Psicopatología Infantojuvenil', requisitos: ['psiq2'] },
  { id: 'edu2', nombre: 'Diagnóstico e Intervención Educacional', requisitos: ['educa'] },
  { id: 'juridica', nombre: 'Psicología Jurídica', requisitos: [] },
  { id: 'org2', nombre: 'Diagnóstico e Intervención Organizacional', requisitos: ['trab_org'] },

  // SEMESTRE 8
  { id: 'psicoan3', nombre: 'Clínica Psicoanalítica', requisitos: ['psicoa2'] },
  { id: 'infanto2', nombre: 'Clínica Infantojuvenil', requisitos: ['infanto1'] },
  { id: 'inv3', nombre: 'Integrador 1: Taller de Investigación', requisitos: ['integ1'] },
  { id: 'juridica2', nombre: 'Diagnóstico e Intervención Jurídica', requisitos: ['juridica'] },
  { id: 'sistemica2', nombre: 'Intervención Clínica Sistémica', requisitos: ['sistemica'] },

  // SEMESTRE 9
  { id: 'clinica', nombre: 'Taller de Intervención Clínica', requisitos: ['psicoan3', 'sistemica2'] },
  { id: 'salud', nombre: 'Psicología y Salud', requisitos: [] },
  { id: 'psicosoc', nombre: 'Diagnóstico e Intervención Psicosocial', requisitos: ['social2'] },
  { id: 'elec1', nombre: 'Electivo Profesional 1', requisitos: [] },
  { id: 'elec2', nombre: 'Electivo Profesional 2', requisitos: [] },

  // SEMESTRE 10
  { id: 'practica', nombre: 'Integrador 2: Práctica Profesional', requisitos: ['clinica', 'inv3'] }
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
  mallaDiv.appendChild(div);
}

function actualizarEstado() {
  ramos.forEach(r => {
    const el = document.getElementById(r.id);
    if (!el.classList.contains('aprobado') && estaDesbloqueado(r)) {
      el.classList.remove('bloqueado');
    }
  });
}

ramos.forEach(crearRamo);
actualizarEstado();
