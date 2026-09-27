# QuizCode

Proyecto integrador — **Desarrollo de Aplicaciones Móviles**
Práctica 1 de 4 — Unidad 1: Definición, análisis y selección tecnológica

## Descripción

QuizCode es una app móvil de flashcards y quizzes para repasar conceptos básicos
de programación (variables, condicionales, ciclos) en sesiones cortas.

## Integrante y rol

- **Luis** — Líder / Analista / UX-UI / Desarrollo / QA (equipo de un solo
  integrante; todos los roles combinados).

## Tecnología seleccionada

- Lenguaje: JavaScript
- Framework: React Native (Expo)
- Navegación: React Navigation (Native Stack)
- Almacenamiento local (próximas prácticas): AsyncStorage

## Cómo ejecutar el proyecto

1. Instalar [Node.js LTS](https://nodejs.org/).
2. Clonar este repositorio.
3. Instalar dependencias:
   ```bash
   npm install
   ```
4. Iniciar el proyecto:
   ```bash
   npx expo start
   ```
5. Escanear el código QR con la app **Expo Go** (Android/iOS) para probarlo en
   un dispositivo real.

## Estructura del proyecto

```
QuizCode/
├── App.js                     # Navegación entre pantallas
├── data/
│   └── questions.js           # Temas, flashcards y preguntas de quiz
└── screens/
    ├── HomeScreen.js          # Lista de temas
    ├── FlashcardsScreen.js    # Tarjetas de repaso
    ├── QuizScreen.js          # Quiz de opción múltiple
    └── ResultScreen.js        # Puntaje final
```

## Estado — Práctica 1

Proyecto base creado con 4 pantallas funcionales (Inicio, Flashcards, Quiz,
Resultado) y 3 temas de ejemplo. Ver el documento técnico para el detalle
completo de alcance, requisitos y justificación tecnológica.
