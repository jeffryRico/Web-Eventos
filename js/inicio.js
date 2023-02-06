

$(document).ready(function () {

  //Carga los datos que estan en el JSON (info.json) usando AJAX

  $.ajax({
    url: "http://127.0.0.1:5500/info.json"
  }).done(function(respuesta){

      //Guarda el resultado en variables

  var evento = respuesta.eventos;
  var actual = respuesta.fechaActual;

  //Clasifica los eventos segun la fecha actual del JSON
  
  var futuros = evento.filter(x => x.fecha > actual)
  var pasado = evento.filter(x => x.fecha <= actual)
  

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

  //Extrae solo dos eventos

  var prox = futuros.slice(1);
  

  //Ordena los eventos segun la fecha (los mas cercanos primero)

  pasado.sort((a,b)=>{
    if (a.fecha > b.fecha){
    return -1;
    }
    if (a.fecha < b.fecha){
    return 1;
    }
    return 0;
  });
 

  //Extrae solo dos eventos

  var ant = pasado.slice(0, 2);

  //Crea un string que contenga el HTML que describe el detalle del evento

  var html = '';

  //Recorre el arreglo y concatena el HTML para cada evento

  for(let i = 0 ; i < prox.length ; i++){

    html += '<div class="card">';
    html += '<div class="card-body">';
    html += '<h5 class="card-title text-primary"><a href="detalle.html?id='+prox[i].id+'">'+prox[i].nombre+'</a></h5>';
    html += '<h6 class="card-subtitle mb-2 text-muted">'+prox[i].fecha+'</h6>';
    html += '<p class="card-text">'+prox[i].descripcion+'</p>';
    html += '</div>';
    html += '</div>';

  };

  //Modifica el DOM agregando el html generado

  document.getElementById("proximo").innerHTML = html;

  //Crea un string que contenga el HTML que describe el detalle del evento

  var html1 = "";

  //Recorre el arreglo y concatena el HTML para cada evento

  for(let i = 0 ; i < ant.length ; i++){

    html1 += '<div class="card">';
    html1 += '<div class="card-body">';
    html1 += '<h5 class="card-title text-primary"><a href="detalle.html?id='+ant[i].id+'">'+ant[i].nombre+'</a></h5>';
    html1 += '<h6 class="card-subtitle mb-2 text-muted">'+ant[i].fecha+'</h6>';
    html1 += '<p class="card-text">'+ant[i].descripcion+'</p>';
    html1 += '</div>';
    html1 += '</div>';

  };

  //Modifica el DOM agregando el html generado

  document.getElementById("pasado").innerHTML = html1;

  });
    

});


