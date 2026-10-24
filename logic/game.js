// Lógica de la partida: separada de las pantallas para poder cambiarla o probarla sin tocar la interfaz.
export const PUNTOS_POR_ACIERTO = 10;

export function mezclar(lista) {
  const a = [...lista];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Devuelve las preguntas de la categoría con las opciones mezcladas.
export function armarPartida(categoria) {
  return categoria.preguntas.map((p) => ({
    texto: p.pregunta,
    opciones: mezclar([
      { texto: p.correcta, correcta: true },
      ...p.incorrectas.map((t) => ({ texto: t, correcta: false })),
    ]),
  }));
}

export function mensajeResultado(porcentaje) {
  if (porcentaje >= 80) return '¡Excelente! Dominas esta categoría.';
  if (porcentaje >= 50) return 'Muy bien, sigue practicando.';
  return 'Buen intento, ¡prueba de nuevo!';
}
