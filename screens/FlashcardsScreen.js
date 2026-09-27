import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { topics } from '../data/questions';

export default function FlashcardsScreen({ route }) {
  const { topicId } = route.params;
  const topic = topics.find((t) => t.id === topicId);
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const card = topic.flashcards[index];
  const isLast = index === topic.flashcards.length - 1;
  const isFirst = index === 0;

  const goNext = () => {
    setShowAnswer(false);
    setIndex((i) => Math.min(i + 1, topic.flashcards.length - 1));
  };
  const goPrev = () => {
    setShowAnswer(false);
    setIndex((i) => Math.max(i - 1, 0));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.progress}>
        Tarjeta {index + 1} de {topic.flashcards.length}
      </Text>

      <TouchableOpacity style={styles.card} activeOpacity={0.9} onPress={() => setShowAnswer((v) => !v)}>
        <Text style={styles.label}>{showAnswer ? 'Respuesta' : 'Pregunta'}</Text>
        <Text style={styles.cardText}>{showAnswer ? card.answer : card.question}</Text>
        <Text style={styles.hint}>Toca la tarjeta para voltear</Text>
      </TouchableOpacity>

      <View style={styles.navRow}>
        <TouchableOpacity style={[styles.navButton, isFirst && styles.disabled]} disabled={isFirst} onPress={goPrev}>
          <Text style={styles.navButtonText}>Anterior</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navButton, isLast && styles.disabled]} disabled={isLast} onPress={goNext}>
          <Text style={styles.navButtonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F6FA', padding: 20, justifyContent: 'center' },
  progress: { textAlign: 'center', color: '#6B7080', marginBottom: 16 },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 28,
    minHeight: 220,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  label: { fontSize: 12, color: '#4C5FD5', fontWeight: '700', marginBottom: 12, textTransform: 'uppercase' },
  cardText: { fontSize: 18, textAlign: 'center', color: '#1B1F3B', lineHeight: 26 },
  hint: { marginTop: 16, fontSize: 12, color: '#A0A4B8' },
  navRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 24 },
  navButton: { backgroundColor: '#4C5FD5', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 10 },
  disabled: { backgroundColor: '#C9CCDE' },
  navButtonText: { color: '#FFFFFF', fontWeight: '600' },
});
