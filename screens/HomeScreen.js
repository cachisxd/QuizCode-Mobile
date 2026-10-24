import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { categorias } from '../data/questions';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.saludo}>¿Listo para jugar? Elige una categoría</Text>
      <View style={styles.grid}>
        {categorias.map((c, i) => (
          <TouchableOpacity
            key={c.id}
            style={[styles.tile, { backgroundColor: c.fondo }, i === categorias.length - 1 && styles.tileAncho]}
            onPress={() => navigation.navigate('Quiz', { categoriaId: c.id, titulo: c.nombre })}
          >
            <Text style={styles.emoji}>{c.emoji}</Text>
            <Text style={[styles.nombre, { color: c.texto }]}>{c.nombre}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F6FA' },
  content: { padding: 16 },
  saludo: { fontSize: 15, color: '#6B7080', marginBottom: 14 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  tile: { width: '48%', minHeight: 100, borderRadius: 14, padding: 14, marginBottom: 12, justifyContent: 'center' },
  tileAncho: { width: '100%' },
  emoji: { fontSize: 26, marginBottom: 4 },
  nombre: { fontSize: 16, fontWeight: '600' },
});
