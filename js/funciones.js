function cambiar_modocss() {
  let boton = document.getElementById("boton_modo");
  let hoja = document.getElementById("modo_css");
 
  if (boton.textContent == "Modo oscuro") {
    boton.textContent = "Modo claro";
    hoja.href ="css/modo_oscuro.css";
  }
  else {
    boton.textContent = "Modo oscuro"; 
    hoja.href ="css/modo_claro.css";
  }
}

function ocultar_items_menu(pagina){
  let index = document.getElementById("pag_index");
  let menu = document.getElementById("pag_menu");
  let detalle = document.getElementById("pag_detalle");
  let contacto = document.getElementById("pag_contacto");

  switch(pagina) {
    case 'index':
        index.style.display = 'none';
        menu.style.display = 'inline-block';
        detalle.style.display = 'none';
        contacto.style.display = 'inline-block';
      break;
    case 'menu':
        index.style.display = 'inline-block';
        menu.style.display = 'none';
        detalle.style.display = 'inline-block';
        contacto.style.display = 'inline-block';
      break;
    case 'detalle':
        index.style.display = 'inline-block';
        menu.style.display = 'inline-block';
        detalle.style.display = 'none';
        contacto.style.display = 'inline-block';
      break;
    case 'contacto':
        index.style.display = 'inline-block';
        menu.style.display = 'inline-block';
        detalle.style.display = 'none';
        contacto.style.display = 'none';
    break;

  }
}