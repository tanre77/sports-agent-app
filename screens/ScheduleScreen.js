import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { supabase } from '../lib/supabase';

export default function ScheduleScreen() {
  const [events, setEvents] = useState([]);

  const load = useCallback(async () => {
    const { data } = await supabase.from('events').select('*, clients(name)').order('date', { ascending: true });
    setEvents(data || []);
  }, []);

  useFocusEffect(useCallback(() => { load(); }, [load]));

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Schedule</Text>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.date}>{item.date || 'No date'}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.client}>{item.clients?.name || ''}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No upcoming events.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0a', padding: 16 },
  header: { fontSize: 24, fontWeight: '700', color: '#fff', marginBottom: 16 },
  card: { backgroundColor: '#1a1a1a', borderRadius: 12, padding: 16, marginBottom: 12, borderLeftWidth: 4, borderLeftColor: '#4ade80' },
  date: { color: '#4ade80', fontWeight: '700', marginBottom: 4 },
  title: { color: '#fff', fontSize: 16 },
  client: { color: '#aaa', marginTop: 2 },
  time: { color: '#ccc', marginTop: 4 },
  empty: { color: '#666', textAlign: 'center', marginTop: 40 },
});
