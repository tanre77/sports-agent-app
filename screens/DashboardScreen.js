import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { supabase } from '../lib/supabase';

export default function DashboardScreen() {
  const [stats, setStats] = useState({ clients: 0, deals: 0, contracts: 0 });

  useEffect(() => {
    async function load() {
      const { count: clients } = await supabase.from('clients').select('*', { count: 'exact', head: true });
      const { count: deals } = await supabase.from('deals').select('*', { count: 'exact', head: true });
      const { count: contracts } = await supabase.from('contracts').select('*', { count: 'exact', head: true });
      setStats({ clients: clients || 0, deals: deals || 0, contracts: contracts || 0 });
    }
    load();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Dashboard</Text>
      <View style={styles.row}>
        <View style={styles.stat}><Text style={styles.statNum}>{stats.clients}</Text><Text style={styles.statLabel}>Clients</Text></View>
        <View style={styles.stat}><Text style={styles.statNum}>{stats.deals}</Text><Text style={styles.statLabel}>Deals</Text></View>
        <View style={styles.stat}><Text style={styles.statNum}>{stats.contracts}</Text><Text style={styles.statLabel}>Contracts</Text></View>
      </View>
      <Text style={styles.section}>Quick actions live on the other tabs. Add clients, upload contracts, and track deals.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0a', padding: 16 },
  header: { fontSize: 28, fontWeight: '700', color: '#fff', marginBottom: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24 },
  stat: { backgroundColor: '#1a1a1a', borderRadius: 12, padding: 16, flex: 1, marginHorizontal: 4, alignItems: 'center' },
  statNum: { fontSize: 28, fontWeight: '700', color: '#4ade80' },
  statLabel: { color: '#aaa', marginTop: 4 },
  section: { color: '#ccc', lineHeight: 22 },
});
