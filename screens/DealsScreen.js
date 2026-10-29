import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { deals } from '../data/mockClients';

export default function DealsScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.brand}>{item.brand}</Text>
      <Text style={styles.client}>{item.client}</Text>
      <Text style={styles.type}>{item.type}</Text>
      <View style={styles.row}>
        <Text style={styles.value}>{item.value}</Text>
        <Text style={styles.status}>{item.status}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Deals & Endorsements</Text>
      <FlatList
        data={deals}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0a', padding: 16 },
  header: { fontSize: 24, fontWeight: '700', color: '#fff', marginBottom: 16 },
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  brand: { fontSize: 18, fontWeight: '600', color: '#fff' },
  client: { color: '#4ade80', marginTop: 2 },
  type: { color: '#aaa', marginTop: 4 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  value: { color: '#fff', fontWeight: '700', fontSize: 16 },
  status: { color: '#fbbf24' },
});
