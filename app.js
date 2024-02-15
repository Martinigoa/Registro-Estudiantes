const readlineSync = require("readline-sync");
const {mostrarListaEstudiantes} = require("./listaestudiantes");

const registrarEstudiantes = () => {
  console.log("Iniciar Registro de Estudiante");

  let cantidadEstudiantes = readlineSync.question(
    "Ingresar la cantidad de estudiantes a registrar: "
  );

  console.log("Cantidad Estudiantes a registrar: " + cantidadEstudiantes);

  let estudiantes = [];

  for (let i = 0; i < cantidadEstudiantes; i++) {
    let nombreEstudiante = readlineSync.question(
      "Ingrese el nombre del estudiante: " + i + ":"
    );

    let edadEstudiante = readlineSync.question(
      "Ingrese la edad del estudiante: " + nombreEstudiante + ":"
    );

    let estudiante = {
      nombre: nombreEstudiante,
      edad: edadEstudiante,
    };

    estudiantes.push(estudiante);
  }

  mostrarListaEstudiantes(estudiantes);
};

//Ejecutando la funcion registrarEstudiantes
registrarEstudiantes();
