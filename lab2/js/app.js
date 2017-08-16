


var dato1 = document.getElementById("dato1");
var dato2 = document.getElementById("dato2");
var suma = document.getElementById("suma");//boton de  suma evento click
var resta = document.getElementById("resta")
var multiplicacion = document.getElementById("Multiplicacion")
var divicion = document.getElementById("divicion")

var resul = document.getElementById("resul");

var resultado;

suma.addEventListener("click", sumar);
resta.addEventListener("click", resta);
multiplicacion.addEventListener("click", multiplicacion);
divicion.addEventListener("click", divicion);

function sumar()
{
   resultado= Number(dato1.value) + Number(dato2.value);

   resul.innerHTML =  "<h1>   </h1>" + resultado ; 

   dato1.value = "";
   dato2.value= "";

   dato1.focus;

}

function restar()
{
   resultado= Number(dato1.value) -  Number(dato2.value);

   resul.innerHTML =  "<h1>   </h1>" + resultado ; 

   dato1.value = "";
   dato2.value= "";

   dato1.focus;

}
function multiplicacion()
{
   resultado= Number(dato1.value) * Number(dato2.value);

   resul.innerHTML =  "<h1>   </h1>" + resultado ; 

   dato1.value = "";
   dato2.value= "";

   dato1.focus;

}
function divicion()
{
   resultado= Number(dato1.value) / Number(dato2.value);

   resul.innerHTML =  "<h1>   </h1>" + resultado ; 

   dato1.value = "";
   dato2.value= "";

   dato1.focus;

}


