import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { supabase } from '../lib/supabase';

export default function ClientsScreen({ navigation }) {
  const [clients, setClients] = useState([]);

  const load = useCallback(async () => {
    const { data, error } = await supabase.from('clients').select('*').order('created_at', { ascending: false });
    if (!error) setClients(data || []);
  }, []);

  useFocusEffect(useCallback(() => { load(); }, [load]));

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ClientDetail', { client: item })}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.meta}>{item.sport} • {item.position || '—'}</Text>
      <Text style={styles.team}>{item.team || 'No team'}</Text>
      <Text style={styles.status}>{item.status}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.header}>Clients</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AddClient')}>
          <Text style={styles.add}>+ Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList data={clients} keyExtractor={(item) => item.id} renderItem={renderItem} ListEmptyComponent={<Text style={styles.empty}>No clients yet. Tap + Add.</Text>} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0a', padding: 16 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  header: { fontSize: 24, fontWeight: '700', color: '#fff' },
  add: { color: '#4ade80', fontSize: 16, fontWeight: '600' },
  card: { backgroundColor: '#1a1a1a', borderRadius: 12, padding: 16, marginBottom: 12, borderWidth: 1, borderColor: '#2a2a2a' },
  name: { fontSize: 18, fontWeight: '600', color: '#fff' },
  meta: { color: '#aaa', marginTop: 4 },
  team: { color: '#4ade80', marginTop: 2 },
  status: { color: '#fbbf24', marginTop: 6, fontWeight: '600' },
  empty: { color: '#666', textAlign: 'center', marginTop: 40 },
});
