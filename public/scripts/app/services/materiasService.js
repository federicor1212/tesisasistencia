angular
.module('app')
.factory('materiasService', [
  '$log',
  '$http',
  '$auth',
  materiasService,
]);

function materiasService($log, $http, $auth) {

  function getMaterias() {
    return $http({ method: "GET", url: '/api/materia', cache: false });
  }

  function guardarMateria(materia) {
    return $http({ method: "POST", url: '/api/crear-materia', data: materia});
  }

  function actualizarMateria(materia) {
    return $http({ method: "POST", url: '/api/actualizar-materia/' + materia.id, data: materia});
  }

  function borrarMateria(materia) {
    return $http({ method: "POST", url: '/api/eliminar-materia/' + materia});
  }

  const service = {
    getMaterias,
    guardarMateria,
    actualizarMateria,
    borrarMateria
  };

  return service;
}
