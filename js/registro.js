function limpiarErrores(){
  var errores = document.getElementsByClassName("text-danger");
  for(var i = 0; i < errores.length; i++){
    errores[i].innerHTML = "";
  }
}

function validar(formulario) {
  
  if (formulario.nombres.value.trim().length == 0) {
    document.getElementById("errorNombres").innerText = "Campo obligatorio";
    formulario.nombres.focus();
    return false;
  } else {
    document.getElementById("errorNombres").innerText = "";
    formulario.nombres.focus();
  }
  
  if (formulario.nombres.value.trim().length < 3) {
    document.getElementById("errorNombres").innerText = "Campo inválido";
    formulario.nombres.focus();
    return false;
  } else {
    document.getElementById("errorNombres").innerText = "";
    formulario.nombres.focus();
  }

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(formulario.email.value)) {
  document.getElementById("errorEmail").innerText = "Campo inválido";
  formulario.email.focus();
  return false;
  } else {
    document.getElementById("errorEmail").innerText = "";
  formulario.email.focus();
  }

  if (formulario.contrasena.value.trim().length == 0) {
    document.getElementById("errorContrasena").innerText = "Campo obligatorio";
    formulario.contrasena.focus();
    return false;
  } else {
    document.getElementById("errorContrasena").innerText = "";
    formulario.contrasena.focus();
  }
  
  if (formulario.contrasena.value.trim().length < 6) {
    document.getElementById("errorContrasena").innerText = "Campo inválido (Mínimo 6 caracteres)";
    formulario.contrasena.focus();
    return false;
  } else {
    document.getElementById("errorContrasena").innerText = "";
    formulario.contrasena.focus();
  }

  if (formulario.contrasena.value != formulario.confirmacion.value) {
    document.getElementById("errorConfirmacion").innerText = "Confirmación no coincide";
    formulario.confirmacion.focus();
    return false;
  } else {
    document.getElementById("errorConfirmacion").innerText = "";
    formulario.confirmacion.focus();
  }

  if (formulario.tipo.value == "-1") {
    document.getElementById("errorTipo").innerText = "Campo obligatorio";
    formulario.tipo.focus();
    return false;
  } else {
    document.getElementById("errorTipo").innerText = "";
    formulario.tipo.focus();
  }

  if (!formulario.acepto.checked) {
    document.getElementById("errorAcepto").innerText = "Debe aceptar los términos y condiciones";
    formulario.acepto.focus();
    return false;
  } else {
    document.getElementById("errorAcepto").innerText = "";
    formulario.acepto.focus();
  }
  
  return false;
}
