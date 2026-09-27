import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ResultScreen({ route, navigation }) {
  const { topicTitle, topicId, score, total } = route.params;
  const percentage = Math.round((score / total) * 100);

  const message =
    percentage >= 80
      ? '¡Excelente dominio del tema!'
      : percentage >= 50
      ? 'Vas bien, sigue repasando.'
      : 'Te recomendamos repasar las flashcards de este tema.';

  return (
    <View style={styles.container}>
      <Text style={styles.topic}>{topicTitle}</Text>
      <Text style={styles.score}>
        {score} / {total}
      </Text>
      <Text style={styles.percentage}>{percentage}% de aciertos</Text>
      <Text style={styles.message}>{message}</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Quiz', { topicId, topicTitle })}>
        <Text style={styles.buttonText}>Reintentar quiz</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.buttonSecondary]} onPress={() => navigation.popToTop()}>
        <Text style={styles.buttonTextSecondary}>Volver al inicio</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F6FA', padding: 24, justifyContent: 'center', alignItems: 'center' },
  topic: { fontSize: 16, color: '#6B7080', marginBottom: 8 },
  score: { fontSize: 48, fontWeight: '800', color: '#4C5FD5' },
  percentage: { fontSize: 16, color: '#1B1F3B', marginTop: 4, marginBottom: 16 },
  message: { fontSize: 15, color: '#1B1F3B', textAlign: 'center', marginBottom: 32 },
  button: { backgroundColor: '#4C5FD5', paddingVertical: 14, paddingHorizontal: 32, borderRadius: 10, marginBottom: 12, width: '100%', alignItems: 'center' },
  buttonSecondary: { backgroundColor: '#E7E9F7' },
  buttonText: { color: '#FFFFFF', fontWeight: '700' },
  buttonTextSecondary: { color: '#4C5FD5', fontWeight: '700' },
});
