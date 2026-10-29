import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { clients } from '../data/mockClients';

export default function ClientsScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.meta}>{item.sport} • {item.position}</Text>
      <Text style={styles.team}>{item.team}</Text>
      <View style={styles.row}>
        <Text style={styles.status}>{item.status}</Text>
        <Text style={styles.deals}>{item.deals} deals</Text>
      </View>
      <Text style={styles.next}>{item.nextEvent}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Athlete Clients</Text>
      <FlatList
        data={clients}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
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
  name: { fontSize: 18, fontWeight: '600', color: '#fff' },
  meta: { color: '#aaa', marginTop: 4 },
  team: { color: '#4ade80', marginTop: 2 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
  status: { color: '#fbbf24', fontWeight: '600' },
  deals: { color: '#888' },
  next: { color: '#ccc', marginTop: 8, fontSize: 13 },
});
