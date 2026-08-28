const formulario = document.querySelector('#formularioContacto');
const mensajeFormulario = document.querySelector('#mensajeFormulario');

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  formulario.classList.add('was-validated');

  if (!formulario.checkValidity()) {
    return;
  }

  mensajeFormulario.classList.remove('d-none');
  formulario.reset();
  formulario.classList.remove('was-validated');
});

document.querySelector('#modalContacto').addEventListener('show.bs.modal', () => {
  mensajeFormulario.classList.add('d-none');
});
