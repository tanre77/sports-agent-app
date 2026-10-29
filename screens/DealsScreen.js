import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { supabase } from '../lib/supabase';

export default function DealsScreen() {
  const [deals, setDeals] = useState([]);

  const load = useCallback(async () => {
    const { data } = await supabase.from('deals').select('*, clients(name)').order('created_at', { ascending: false });
    setDeals(data || []);
  }, []);

  useFocusEffect(useCallback(() => { load(); }, [load]));

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Deals</Text>
      <FlatList
        data={deals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.brand}>{item.brand}</Text>
            <Text style={styles.client}>{item.clients?.name || 'Client'}</Text>
            <Text style={styles.type}>{item.type}</Text>
            <View style={styles.row}>
              <Text style={styles.value}>{item.value}</Text>
              <Text style={styles.status}>{item.status}</Text>
            </View>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No deals yet.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0a', padding: 16 },
  header: { fontSize: 24, fontWeight: '700', color: '#fff', marginBottom: 16 },
  card: { backgroundColor: '#1a1a1a', borderRadius: 12, padding: 16, marginBottom: 12, borderWidth: 1, borderColor: '#2a2a2a' },
  brand: { fontSize: 18, fontWeight: '600', color: '#fff' },
  client: { color: '#4ade80', marginTop: 2 },
  type: { color: '#aaa', marginTop: 4 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  value: { color: '#fff', fontWeight: '700' },
  status: { color: '#fbbf24' },
  empty: { color: '#666', textAlign: 'center', marginTop: 40 },
});
