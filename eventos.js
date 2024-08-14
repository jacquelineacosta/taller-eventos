let elDiv = document.getElementsByTagName("div");

function saludoDiv() {
    alert( 'Hola, soy el div!' );
  }

elDiv.addEventListener("click", saludoDiv);