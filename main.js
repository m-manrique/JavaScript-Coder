let menu = "MENU\n";
menu += "1. Sumar\n"; 
menu += "2. Restar\n";
menu += "3. Multiplicar\n";
menu += "4. Dividir\n";
menu += "5. Salir\n\n";
menu += "Seleccione una Operación:";

let numeroUno = 0;
let numeroDos = 0;

function solicitarNumeros() {
  numeroUno = Number(prompt("Ingrese el número uno"));
  numeroDos = Number(prompt("Ingrese el número dos"));

}

function suma(n1, n2) {
  return `El resultado de la Suma es: ${n1 + n2}`;
  //return n1 + n2;
}

const resta = (n1 , n2) => {
  return `El resultado de la Resta es: ${n1 - n2}`;
  //return n1 - n2;  
};

const multiplicacion = (n1 , n2) => {
  return `El resultado de la Multiplicación es: ${n1 * n2}`;
  //return n1 * n2;  
};

const division = (n1 , n2) => {
  if (n2 === 0) {
    return "No es posible dividir por cero.";
  }
  return `El resultado de la División es: ${n1 / n2}`;
  //return n1 / n2;
};


let cod = parseInt(prompt(menu));


while (cod != 5) {
  switch (cod) {
    case 1:
      solicitarNumeros();
      alert(suma(numeroUno , numeroDos));
      break;
    case 2:
      solicitarNumeros();
      alert(resta(numeroUno , numeroDos));
      break;
    case 3:
      solicitarNumeros();
      alert(multiplicacion(numeroUno , numeroDos));
      break;
    case 4:
      solicitarNumeros();
      alert(division(numeroUno , numeroDos));
      break;
    default:
      alert("Operación no válida.");
      break;
  }

  cod = parseInt(prompt(menu));
}


