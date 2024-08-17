document.addEventListener('DOMContentLoaded', function() {

const midiv = document.querySelector("div");
const btn = document.querySelector("button");

btn.addEventListener("click", event => {
    event.stopPropagation();
    alert ("Hola!");
})

midiv.addEventListener("click", function (){
  alert( 'Hola, soy el div!' );
});

});