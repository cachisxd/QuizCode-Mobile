import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { mensajeResultado, PUNTOS_POR_ACIERTO } from '../logic/game';

export default function ResultScreen({ route, navigation }) {
  const { categoriaId, titulo, puntos, total } = route.params;
  const aciertos = puntos / PUNTOS_POR_ACIERTO;
  const preguntas = total / PUNTOS_POR_ACIERTO;
  const porcentaje = Math.round((puntos / total) * 100);

  return (
    <View style={styles.container}>
      <Text style={styles.categoria}>{titulo}</Text>
      <Text style={styles.puntaje}>{aciertos}/{preguntas}</Text>
      <Text style={styles.porcentaje}>{porcentaje}% de aciertos</Text>
      <Text style={styles.mensaje}>{mensajeResultado(porcentaje)}</Text>

      <TouchableOpacity style={styles.boton} onPress={() => navigation.replace('Quiz', { categoriaId, titulo })}>
        <Text style={styles.botonTexto}>Jugar de nuevo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.boton, styles.secundario]} onPress={() => navigation.popToTop()}>
        <Text style={styles.secundarioTexto}>Volver al inicio</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F6FA', padding: 24, justifyContent: 'center', alignItems: 'center' },
  categoria: { fontSize: 16, color: '#6B7080', marginBottom: 8 },
  puntaje: { fontSize: 56, fontWeight: '800', color: '#4C5FD5' },
  porcentaje: { fontSize: 16, color: '#1B1F3B', marginTop: 4, marginBottom: 12 },
  mensaje: { fontSize: 15, color: '#1B1F3B', textAlign: 'center', marginBottom: 32 },
  boton: { minHeight: 48, backgroundColor: '#4C5FD5', borderRadius: 12, marginBottom: 12, width: '100%', alignItems: 'center', justifyContent: 'center' },
  secundario: { backgroundColor: '#E7E9F7' },
  botonTexto: { color: '#FFFFFF', fontWeight: '700', fontSize: 16 },
  secundarioTexto: { color: '#4C5FD5', fontWeight: '700', fontSize: 16 },
});
