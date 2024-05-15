# Control para Pacientes Veterinarios

El proyecto consiste en una página para llevar el control y evolución de pacientes veterinarios, elaborado con React, TypeScript, Zustand, React Hook Form, Tailwind y Vite.

Adicionalmente, emplea dependencias como:
  - "react-toastify": "^10.0.5" - Para generar avisos de determinadas acciones mediante ventanas modales.
  - "uuid": "^9.0.1" - Para generar IDs.

Del lado izquierdo, se encuentra el formulario donde se ingresan los datos de los pacientes (este cuenta con validación en cada input).
Del lado derecho, se mostrarán los pacientes que hayan sido registrados.

Cada paciente generado puede editarse (en caso de que se desee modificar algun dato ingresado previamente) o eliminarse. En el caso de la edición, se recuperarán los datos ingresados al momento de su creación mediante React Hook Form.

Con cada acción (bien sea agregar un paciente, actualizarlo o eliminarlo) se generará una ventana modal con la acción realizada para darle una mayor retroalimentación al usuario por medio de react-toastify.

Finalmente, apoyandonos de las cualidades de Zustand, se implementa la funcion "persist" para implementar LocalStorage, por lo que la información ingresada previamente no se perderá al actualizar la página.

El proyecto se encuentra alojado en Netlify.

Enlace: https://66443b294aa9564ba2ceaf8c--statuesque-pie-78d0ff.netlify.app/
