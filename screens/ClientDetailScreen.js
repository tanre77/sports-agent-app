import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ClientDetailScreen({ route }) {
  const { client } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.name}>{client.name}</Text>
      <Text style={styles.meta}>{client.sport} • {client.position}</Text>
      <Text style={styles.team}>{client.team}</Text>
      <View style={styles.section}>
        <Text style={styles.label}>Status</Text>
        <Text style={styles.value}>{client.status}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Commission Rate</Text>
        <Text style={styles.value}>{client.commission_rate ? `${client.commission_rate}%` : '—'}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Notes</Text>
        <Text style={styles.value}>{client.notes || 'No notes yet.'}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0a', padding: 16 },
  name: { fontSize: 28, fontWeight: '700', color: '#fff' },
  meta: { color: '#aaa', marginTop: 4, fontSize: 16 },
  team: { color: '#4ade80', marginTop: 4, fontSize: 16 },
  section: { marginTop: 20 },
  label: { color: '#888', fontSize: 13, textTransform: 'uppercase' },
  value: { color: '#fff', fontSize: 16, marginTop: 4 },
});
