import React, { useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert, StyleSheet } from 'react-native';
import { categorias } from '../data/questions';
import { armarPartida, PUNTOS_POR_ACIERTO } from '../logic/game';

export default function QuizScreen({ route, navigation }) {
  const { categoriaId, titulo } = route.params;
  const categoria = categorias.find((c) => c.id === categoriaId);
  const preguntas = useMemo(() => armarPartida(categoria), [categoria]);
  const [indice, setIndice] = useState(0);
  const [seleccion, setSeleccion] = useState(null);
  const [puntos, setPuntos] = useState(0);
  const terminada = useRef(false);

  // Pide confirmación si el usuario intenta salir antes de terminar la partida.
  useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        if (terminada.current) return;
        e.preventDefault();
        Alert.alert('¿Abandonar la partida?', 'Perderás tu avance.', [
          { text: 'Seguir jugando', style: 'cancel' },
          { text: 'Abandonar', style: 'destructive', onPress: () => navigation.dispatch(e.data.action) },
        ]);
      }),
    [navigation]
  );

  const pregunta = preguntas[indice];
  const respondida = seleccion !== null;
  const ultima = indice === preguntas.length - 1;
  const acerto = respondida && pregunta.opciones[seleccion].correcta;

  const responder = (k) => {
    if (respondida) return;
    setSeleccion(k);
    if (pregunta.opciones[k].correcta) setPuntos((p) => p + PUNTOS_POR_ACIERTO);
  };

  const siguiente = () => {
    if (ultima) {
      terminada.current = true;
      navigation.replace('Result', { categoriaId, titulo, puntos, total: preguntas.length * PUNTOS_POR_ACIERTO });
      return;
    }
    setSeleccion(null);
    setIndice((i) => i + 1);
  };

  const estilo = (op, k) => {
    if (!respondida) return styles.opcion;
    if (op.correcta) return [styles.opcion, styles.correcta];
    if (k === seleccion) return [styles.opcion, styles.incorrecta];
    return [styles.opcion, styles.apagada];
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.fila}>
        <Text style={styles.avance}>Pregunta {indice + 1} de {preguntas.length}</Text>
        <Text style={styles.chip}>{puntos} pts</Text>
      </View>
      <View style={styles.barra}>
        <View style={[styles.barraRelleno, { width: `${((indice + (respondida ? 1 : 0)) / preguntas.length) * 100}%` }]} />
      </View>
      <Text style={styles.pregunta}>{pregunta.texto}</Text>
      {pregunta.opciones.map((op, k) => (
        <TouchableOpacity key={k} style={estilo(op, k)} onPress={() => responder(k)} disabled={respondida}>
          <Text style={styles.opcionTexto}>
            {respondida && op.correcta ? '✓ ' : respondida && k === seleccion ? '✗ ' : ''}
            {op.texto}
          </Text>
        </TouchableOpacity>
      ))}
      {respondida && (
        <>
          <Text style={styles.mensaje}>
            {acerto ? `¡Correcto! +${PUNTOS_POR_ACIERTO} pts` : `Incorrecto, era ${pregunta.opciones.find((o) => o.correcta).texto}`}
          </Text>
          <TouchableOpacity style={styles.boton} onPress={siguiente}>
            <Text style={styles.botonTexto}>{ultima ? 'Ver resultado' : 'Siguiente'}</Text>
          </TouchableOpacity>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F6FA' },
  content: { padding: 20 },
  fila: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  avance: { color: '#6B7080' },
  chip: { backgroundColor: '#FFFFFF', borderColor: '#E7E9F7', borderWidth: 1, borderRadius: 999, paddingHorizontal: 12, paddingVertical: 4, color: '#1B1F3B', fontWeight: '600' },
  barra: { height: 6, borderRadius: 3, backgroundColor: '#E7E9F7', marginBottom: 16 },
  barraRelleno: { height: 6, borderRadius: 3, backgroundColor: '#4C5FD5' },
  pregunta: { fontSize: 19, fontWeight: '600', color: '#1B1F3B', marginBottom: 18 },
  opcion: { minHeight: 52, justifyContent: 'center', backgroundColor: '#FFFFFF', borderRadius: 12, paddingHorizontal: 14, marginBottom: 10, borderWidth: 1, borderColor: '#E7E9F7' },
  correcta: { backgroundColor: '#DFF5E3', borderColor: '#34A853' },
  incorrecta: { backgroundColor: '#FBE1E1', borderColor: '#E24C4C' },
  apagada: { opacity: 0.6 },
  opcionTexto: { fontSize: 16, color: '#1B1F3B' },
  mensaje: { fontWeight: '600', color: '#1B1F3B', marginVertical: 8 },
  boton: { minHeight: 48, backgroundColor: '#4C5FD5', borderRadius: 12, alignItems: 'center', justifyContent: 'center', marginTop: 4 },
  botonTexto: { color: '#FFFFFF', fontWeight: '700', fontSize: 16 },
});
