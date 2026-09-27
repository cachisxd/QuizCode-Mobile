import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { topics } from '../data/questions';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Elige un tema para repasar</Text>
      <FlatList
        data={topics}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 24 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.button, styles.buttonSecondary]}
                onPress={() =>
                  navigation.navigate('Flashcards', { topicId: item.id, topicTitle: item.title })
                }
              >
                <Text style={styles.buttonTextSecondary}>Flashcards</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  navigation.navigate('Quiz', { topicId: item.id, topicTitle: item.title })
                }
              >
                <Text style={styles.buttonText}>Quiz</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F6FA', paddingTop: 24, paddingHorizontal: 16 },
  header: { fontSize: 20, fontWeight: '700', marginBottom: 16, color: '#1B1F3B' },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardTitle: { fontSize: 16, fontWeight: '600', marginBottom: 12, color: '#1B1F3B' },
  buttonRow: { flexDirection: 'row', justifyContent: 'flex-end' },
  button: { backgroundColor: '#4C5FD5', paddingVertical: 8, paddingHorizontal: 14, borderRadius: 8, marginLeft: 8 },
  buttonSecondary: { backgroundColor: '#E7E9F7' },
  buttonText: { color: '#FFFFFF', fontWeight: '600' },
  buttonTextSecondary: { color: '#4C5FD5', fontWeight: '600' },
});
