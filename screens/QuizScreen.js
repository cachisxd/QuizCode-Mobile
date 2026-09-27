import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { topics } from '../data/questions';

export default function QuizScreen({ route, navigation }) {
  const { topicId, topicTitle } = route.params;
  const topic = topics.find((t) => t.id === topicId);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);

  const question = topic.quiz[index];
  const isLast = index === topic.quiz.length - 1;

  const handleSelect = (optionIndex) => {
    if (selected !== null) return;
    setSelected(optionIndex);
    if (optionIndex === question.correctIndex) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (isLast) {
      navigation.replace('Result', { topicTitle, topicId, score, total: topic.quiz.length });
      return;
    }
    setSelected(null);
    setIndex((i) => i + 1);
  };

  const getOptionStyle = (optionIndex) => {
    if (selected === null) return styles.option;
    if (optionIndex === question.correctIndex) return [styles.option, styles.optionCorrect];
    if (optionIndex === selected) return [styles.option, styles.optionIncorrect];
    return [styles.option, styles.optionDisabled];
  };

  return (
    <View style={styles.container}>
      <Text style={styles.progress}>
        Pregunta {index + 1} de {topic.quiz.length}
      </Text>
      <Text style={styles.question}>{question.question}</Text>

      {question.options.map((opt, i) => (
        <TouchableOpacity key={i} style={getOptionStyle(i)} onPress={() => handleSelect(i)} disabled={selected !== null}>
          <Text style={styles.optionText}>{opt}</Text>
        </TouchableOpacity>
      ))}

      {selected !== null && (
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>{isLast ? 'Ver resultado' : 'Siguiente'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F6FA', padding: 20 },
  progress: { textAlign: 'center', color: '#6B7080', marginBottom: 12 },
  question: { fontSize: 18, fontWeight: '600', color: '#1B1F3B', marginBottom: 20, textAlign: 'center' },
  option: { backgroundColor: '#FFFFFF', borderRadius: 10, paddingVertical: 14, paddingHorizontal: 16, marginBottom: 12, borderWidth: 1, borderColor: '#E7E9F7' },
  optionCorrect: { backgroundColor: '#DFF5E3', borderColor: '#34A853' },
  optionIncorrect: { backgroundColor: '#FBE1E1', borderColor: '#E24C4C' },
  optionDisabled: { opacity: 0.6 },
  optionText: { fontSize: 15, color: '#1B1F3B' },
  nextButton: { marginTop: 12, backgroundColor: '#4C5FD5', paddingVertical: 14, borderRadius: 10, alignItems: 'center' },
  nextButtonText: { color: '#FFFFFF', fontWeight: '700', fontSize: 15 },
});
