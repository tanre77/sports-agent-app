import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Agent Profile</Text>
      <View style={styles.card}>
        <Text style={styles.name}>Tanner Hughes</Text>
        <Text style={styles.role}>Sports Agent</Text>
        <Text style={styles.meta}>Agency: Independent</Text>
        <Text style={styles.meta}>Clients: 4 active</Text>
        <Text style={styles.meta}>Focus: Multi-sport representation</Text>
      </View>
      <Text style={styles.note}>
        This is a starter template. Customize with your real agency details, logo, and auth.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0a', padding: 16 },
  header: { fontSize: 24, fontWeight: '700', color: '#fff', marginBottom: 16 },
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  name: { fontSize: 22, fontWeight: '700', color: '#fff' },
  role: { color: '#4ade80', marginTop: 4, fontSize: 16 },
  meta: { color: '#ccc', marginTop: 8 },
  note: { color: '#888', marginTop: 24, fontSize: 14, lineHeight: 20 },
});
