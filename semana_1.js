// 📚 **Ejercicios de la semana 1**

// **EJERCICIO 1**
// 🔧 Crea una función llamada "sumar" que reciba 2 números por parámetros y retorne el resultado de la suma.

const sumar = (num1, num2) => {
  let resultado = num1 + num2;

  return resultado;
};

let sumaFinal = sumar(4, 5);

console.log(sumaFinal);

// **EJERCICIO 2**
// 🔢 Crea una función llamada "multiplicar" que reciba 2 números por parámetros y retorne el resultado de la multiplicación. Además, verifica si ambos parámetros son números; si alguno no lo es, debe devolver el siguiente mensaje: "Ambos parámetros deben ser números."

const multiplicar = (num1, num2) => {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 * num2;
  } else {
    return `Alguno de los datos ingresados no es tipo numero`;
  }
};

let multiplicacionFinal = multiplicar(5, 4);

console.log(multiplicacionFinal);

// **EJERCICIO 3**
// ❄️ Crea una función llamada "esInvierno" que reciba por parámetro el mes y devuelva `true` si es un mes de invierno o `false` en caso contrario. Meses de invierno: junio, julio, agosto.

const esInvierno = (mes) => {
  switch (mes) {
    case 'junio':
    case 'julio':
    case 'agosto':
      return true;
    default:
      return false;
  }
};

let validarMes = esInvierno('febrero');

console.log(validarMes);

// **EJERCICIO 4**
// 🦠 Crea una función llamada "esCovid" que reciba por parámetro dos arrays: uno con los síntomas que posee el paciente y otro con los síntomas del COVID-19. Si coinciden 2 o más síntomas, debe retornar `true`, indicando que es COVID-19; de lo contrario, retorna `false`.

// **ARRAYS PARA PROBAR**
// - Síntomas del paciente enfermo: ["fiebre", "dolor muscular", "vómitos"]
// - Síntomas del paciente no enfermo: ["fiebre", "titila ojo", "vómitos"]
// - Síntomas del COVID-19: ["fiebre", "dolor muscular", "pérdida de gusto"]

let sintomasPaciente = ['fiebre', 'dolor muscular', 'vómitos'];
let sintomasNoEnfermo = ['fiebre', 'titila ojo', 'vómitos'];
let sintomasCovid19 = ['fiebre', 'dolor muscular', 'pérdida de gusto'];

const esCovid = (arrayCovid, arrayPaciente) => {
  let contadorSintomas = 0;
  for (let i = 0; i < arrayCovid.length; i++) {
    for (let j = 0; j < arrayPaciente.length; j++) {
      if (arrayCovid[i] == arrayPaciente[j]) {
        contadorSintomas++;
      } else {
        contadorSintomas;
      }
    }
  }

  if (contadorSintomas >= 2) {
    return true;
  } else {
    return false;
  }
};

let validarCovid = esCovid(sintomasCovid19, sintomasNoEnfermo);

console.log(validarCovid);

// **EJERCICIO 5**
// 🕒 Crea la función "horarioCursada" que recibe por parámetro la materia y debe devolver el día y la hora en que se cursa. En caso de que la materia no se encuentre en el sistema, retorna el mensaje "MATERIA NO ENCONTRADA." 📅

// EJEMPLOS:
// - MATEMÁTICA → JUEVES
// - LENGUA → LUNES
// - GEOGRAFÍA → VIERNES
// - PROGRAMACIÓN → MATERIA NO ENCONTRADA

let cursos = [
  { nombre: 'MATEMÁTICAS', dia: 'JUEVES', hora: '9:00am' },
  { nombre: 'LENGUA', dia: 'LUNES', hora: '11:00pm' },
  { nombre: 'GEOGRAFÍA', dia: 'VIERNES', hora: '7:00am' },
  { nombre: 'CTA', dia: 'MARTES', hora: '10:00pm' },
];

const horarioCursada = (materia) => {
  for (let i = 0; i < cursos.length; i++) {
    if (cursos[i].nombre === materia.toUpperCase()) {
      return `Materia = ${cursos[i].nombre} - Dia= ${cursos[i].dia} - Hora = ${cursos[i].hora} `;
    }
  }

  return `MATERIA NO ENCONTRADA`;
};

let mostrarMateria = horarioCursada('geografía');



console.log(mostrarMateria);
