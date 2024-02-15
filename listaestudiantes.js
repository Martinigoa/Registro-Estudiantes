const mostrarListaEstudiantes = (estudiantes) => 
{
  console.log("Lista de estudiantes registrados");
  estudiantes.forEach(estudiantes => 
  {   
      console.log(`Nombre:  ${estudiantes.nombre} , Edad: ${estudiantes.edad}`);
    
  });
};

module.exports = {mostrarListaEstudiantes}
 