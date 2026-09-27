// Contenido de ejemplo para el PMF de la Práctica 1.
// Cada tema tiene flashcards (pregunta/respuesta) y un quiz de opción múltiple.
// correctIndex indica la posición (0, 1, 2...) de la respuesta correcta en "options".

export const topics = [
  {
    id: 'variables',
    title: 'Variables y tipos de dato',
    flashcards: [
      {
        question: '¿Qué es una variable?',
        answer:
          'Un espacio en memoria con un nombre, usado para almacenar un valor que puede cambiar durante la ejecución del programa.',
      },
      {
        question: '¿Qué es un tipo de dato?',
        answer:
          'Una clasificación que indica qué tipo de valor puede almacenar una variable (por ejemplo, entero, texto o booleano).',
      },
      {
        question: 'Da un ejemplo de tipo de dato numérico.',
        answer: 'Entero (int) o decimal (float / double).',
      },
      {
        question: '¿Qué es una variable booleana?',
        answer: 'Una variable que solo puede tener dos valores: verdadero (true) o falso (false).',
      },
      {
        question: '¿Qué es una constante?',
        answer:
          'Un valor que se asigna una sola vez y no puede modificarse durante la ejecución del programa.',
      },
    ],
    quiz: [
      {
        question: '¿Cuál de las siguientes opciones es un valor booleano?',
        options: ['3.14', 'true / false', '"Hola"', '1, 2, 3'],
        correctIndex: 1,
      },
      {
        question: '¿Qué palabra describe una variable cuyo valor no debe cambiar?',
        options: ['variable', 'función', 'constante', 'ciclo'],
        correctIndex: 2,
      },
      {
        question: '¿Cuál de estos es un número decimal válido?',
        options: ['true', '"3.14"', 'ciclo', '3.14'],
        correctIndex: 3,
      },
      {
        question: 'Una variable de tipo texto también se conoce como:',
        options: ['entero', 'cadena o string', 'booleano', 'función'],
        correctIndex: 1,
      },
      {
        question: '¿Qué ocurre normalmente si intentas cambiar el valor de una constante?',
        options: ['No pasa nada', 'Se cambia sin problema', 'Se convierte en variable', 'Se genera un error'],
        correctIndex: 3,
      },
    ],
  },
  {
    id: 'condicionales',
    title: 'Condicionales',
    flashcards: [
      {
        question: '¿Qué es una estructura condicional?',
        answer:
          'Una instrucción que permite ejecutar diferentes bloques de código dependiendo de si una condición es verdadera o falsa.',
      },
      {
        question: '¿Qué hace la instrucción "else"?',
        answer: 'Define el bloque de código que se ejecuta cuando la condición del "if" es falsa.',
      },
      {
        question: '¿Qué es "else if"?',
        answer: 'Permite evaluar una condición adicional cuando la primera condición del "if" fue falsa.',
      },
      {
        question: '¿Qué devuelve una condición al evaluarse?',
        answer: 'Un valor booleano (verdadero o falso).',
      },
      {
        question: '¿Para qué sirve el operador de comparación "==" o "==="?',
        answer: 'Para comparar si dos valores son iguales.',
      },
    ],
    quiz: [
      {
        question: '¿Qué palabra clave ejecuta código solo si una condición es verdadera?',
        options: ['for', 'if', 'while', 'function'],
        correctIndex: 1,
      },
      {
        question: '¿Qué devuelve siempre una condición evaluada?',
        options: ['Un texto', 'Un número entero', 'Un valor booleano', 'Una lista'],
        correctIndex: 2,
      },
      {
        question: '¿Cuál es la función de "else"?',
        options: [
          'Repetir un bloque de código',
          'Declarar una variable',
          'Ejecutar código cuando la condición es falsa',
          'Definir una función',
        ],
        correctIndex: 2,
      },
      {
        question: '¿Qué estructura permite evaluar varias condiciones en cadena?',
        options: ['for', 'while', 'else if', 'return'],
        correctIndex: 2,
      },
      {
        question: '¿Qué operador se usa para comparar igualdad entre dos valores?',
        options: ['=', '+', '== o ===', '!'],
        correctIndex: 2,
      },
    ],
  },
  {
    id: 'ciclos',
    title: 'Ciclos (loops)',
    flashcards: [
      {
        question: '¿Qué es un ciclo o bucle?',
        answer: 'Una estructura que permite repetir un bloque de código varias veces mientras se cumpla una condición.',
      },
      {
        question: '¿Qué es un ciclo "for"?',
        answer: 'Un ciclo que repite un bloque de código un número determinado de veces, usando un contador.',
      },
      {
        question: '¿Qué es un ciclo "while"?',
        answer: 'Un ciclo que repite un bloque de código mientras una condición se mantenga verdadera.',
      },
      {
        question: '¿Qué es un ciclo infinito?',
        answer: 'Un ciclo cuya condición nunca se vuelve falsa, por lo que nunca termina de ejecutarse.',
      },
      {
        question: '¿Qué instrucción se usa para salir de un ciclo antes de que termine?',
        answer: '"break".',
      },
    ],
    quiz: [
      {
        question: '¿Qué ciclo es más adecuado cuando ya sabes cuántas veces se repetirá?',
        options: ['while', 'for', 'if', 'function'],
        correctIndex: 1,
      },
      {
        question: '¿Qué ciclo se repite mientras una condición sea verdadera, sin un contador fijo?',
        options: ['for', 'switch', 'while', 'return'],
        correctIndex: 2,
      },
      {
        question: '¿Qué provoca que un ciclo se vuelva infinito?',
        options: [
          'Que el ciclo tenga un contador',
          'Que la condición nunca se vuelva falsa',
          'Que se use break',
          'Que no haya variables',
        ],
        correctIndex: 1,
      },
      {
        question: '¿Qué instrucción detiene un ciclo antes de que termine naturalmente?',
        options: ['continue', 'return', 'break', 'if'],
        correctIndex: 2,
      },
      {
        question: '¿Qué instrucción salta a la siguiente iteración de un ciclo sin terminarlo?',
        options: ['break', 'return', 'continue', 'else'],
        correctIndex: 2,
      },
    ],
  },
];
