// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites

$(document).ready(function () {

  //Carga los datos que estan en el JSON (info.json) usando AJAX

  $.ajax({
    url: "http://127.0.0.1:5500/info.json"
  }).done(function(respuesta){

    //Guarda el resultado en variables

    var evento = respuesta.eventos;
    var actual = respuesta.fechaActual;

  //Selecciona los eventos que sean posteriores a la fecha actual del JSON

  var futuros = evento.filter(x => x.fecha > actual)

  //Ordena los eventos segun la fecha (los mas cercanos primero)

  futuros.sort((a,b)=>{
    if (a.fecha > b.fecha){
    return 1;
    }
    if (a.fecha < b.fecha){
    return -1;
    }
    return 0;
    });
  
  //Crea un string que contenga el HTML que describe el detalle del evento
  
  var html = '';

  //Recorre el arreglo y concatena el HTML para cada evento

  for(let i = 0 ; i < futuros.length ; i++){

    html += '<div class="card">';
    html += '<div class="card-body">';
    html += '<h5 class="card-title text-primary"><a href="detalle.html?id='+futuros[i].id+'">'+futuros[i].nombre+'</a></h5>';
    html += '<h6 class="card-subtitle mb-2 text-muted">'+futuros[i].fecha+' - '+futuros[i].lugar+'</h6>';
    html += '<p class="card-text">'+futuros[i].descripcion+'</p>';
    html += '<p class="card-text text-primary">invitados: '+futuros[i].invitados+'</p>'
    html += '</div>';
    html += '</div>';

  };

  //Modifica el DOM agregando el html generado dentro del div con id=evento

  document.getElementById("proximos").innerHTML = html;

  })

});
