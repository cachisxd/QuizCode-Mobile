# QuizRush

Proyecto integrador — **Desarrollo de Aplicaciones Móviles**
Práctica 2 de 4 — Unidad 2: diseño funcional, interfaz y arquitectura

## Descripción

QuizRush es una trivia móvil gamificada de cultura general: el usuario elige una
de cinco categorías (Historia, Ciencia, Geografía, Deportes y Cine y música),
responde 10 preguntas de opción múltiple con retroalimentación inmediata y ve su
puntaje final. (Antes el proyecto se llamaba QuizCode y era de flashcards de
programación; el cambio está justificado en el documento técnico, sección 2.1).

## Integrante y rol

- **Luis** — Líder / UX-UI / Arquitectura / Desarrollo / QA (equipo de una persona).

## Tecnología

JavaScript · React Native (Expo) · React Navigation (Native Stack)

## Cómo ejecutar

1. Instalar [Node.js LTS](https://nodejs.org/).
2. Clonar el repositorio e instalar dependencias: `npm install`
3. Iniciar: `npx expo start` y escanear el QR con la app **Expo Go**.

## Arquitectura (capas)

```
App.js                  Navegación entre pantallas
screens/                Presentación: HomeScreen, QuizScreen, ResultScreen
logic/game.js           Lógica: arma y mezcla la partida, mensaje de resultado
data/questions.js       Datos: banco de 50 preguntas (10 por categoría)
```

## Estado — Práctica 2

Implementado: Inicio con 5 categorías, partida de 10 preguntas con
retroalimentación (color, ícono y mensaje), confirmación al abandonar, pantalla
de resultado y navegación completa. Pendiente (deseables): guardar mejor puntaje,
racha, modo reto, vibración y sonido.
