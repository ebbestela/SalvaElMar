var razones = [
  "Limpia los pulmones y mejora su funcionamiento. La brisa marina es rica en sales minerales y nos ayuda a respirar y reduce, por ejemplo, los síntomas del asma y de otras enfermedades respiratorias.", "Relaja el cerebro y facilita su concentración. Gracias al color azul (relacionado con la tranquilidad y la calma) y al hecho de que el aire del mar es rico en iones negativos (unas partículas cargadas enérgicamente que nos ayudan a relajarnos y favorecen la producción de serotonina). También nos ayuda a ser más creativos.", "Entrena el corazón. El agua del mar es muy recomendable para mejorar la circulación sanguínea del cuerpo. Su temperatura fría activa nuestro corazón y mejora todo el sistema circulatorio en general.", "eliminar las infecciones, sobre todo aquellas relacionadas con el sistema respiratorio y ocular. Por lo tanto, podríamos decir que vivir cerca del mar es bueno para fortalecer nuestro sistema inmunitario."
];

var fotos = [
  "https://images.unsplash.com/photo-1550163661-49167505ffa5?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODkxMjYwOTh8&ixlib=rb-4.0.3&q=85", "https://images.unsplash.com/photo-1487009805257-5ed2eb9f10a3?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODkxMjYwOTh8&ixlib=rb-4.0.3&q=85", "https://images.unsplash.com/photo-1497290756760-23ac55edf36f?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODkxMjYwOTh8&ixlib=rb-4.0.3&q=85", "https://images.unsplash.com/photo-1550163661-49167505ffa5?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODkxMjYwOTh8&ixlib=rb-4.0.3&q=85"
];

var i =0;
function avanzar()
{
  document.getElementById("razones").innerHTML = razones[i];
   document.getElementById("album").src = fotos[i];
  i++;
}