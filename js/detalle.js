// Hemos omitido los acentos en los comentarios por compatibilidad

$(document).ready(function () {

  //Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>

  //Carga los datos que estan en el JSON (info.json) usando AJAX

  $.ajax({
    url: "http://127.0.0.1:5500/info.json"
  }).done(function(respuesta){

    //Guarda el resultado en una variable

    evento = respuesta.eventos;
    var id = location.search.match(/id=(\d)*/)[1]

    //Busca el elemento en el arreglo

    even = evento.find(function (element) {
      return element.id == id
    })

    //Crea un string que contenga el HTML que describe el detalle del evento

    var html = `<div class="card">
                <div class="card-body">
                <h5 class="card-title text-primary">${even.nombre}</h5>
                <h6 class="card-subtitle">${even.fecha} - ${even.lugar}</h6>
                <hr>
                <p class="card-text">Descripción: ${even.descripcion}</p>
                <p class="card-text">Costo: ${even.precio}</p>
                <p class="card-text text-primary">Invitados: ${even.invitados}</p>
                `
    
   //Modifica el DOM agregando el html generado dentro del div con id=evento
   
   document.getElementById("evento").innerHTML = html

  })

});
