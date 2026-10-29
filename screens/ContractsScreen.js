import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import * as DocumentPicker from 'expo-document-picker';
import { supabase } from '../lib/supabase';

export default function ContractsScreen() {
  const [contracts, setContracts] = useState([]);

  const load = useCallback(async () => {
    const { data } = await supabase.from('contracts').select('*, clients(name)').order('created_at', { ascending: false });
    setContracts(data || []);
  }, []);

  useFocusEffect(useCallback(() => { load(); }, [load]));

  async function uploadContract() {
    const result = await DocumentPicker.getDocumentAsync({ type: '*/*', copyToCacheDirectory: true });
    if (result.canceled) return;

    const file = result.assets[0];
    const { data: { user } } = await supabase.auth.getUser();
    const filePath = `${user.id}/${Date.now()}_${file.name}`;

    const response = await fetch(file.uri);
    const blob = await response.blob();

    const { error: uploadError } = await supabase.storage.from('contracts').upload(filePath, blob);
    if (uploadError) return Alert.alert('Upload failed', uploadError.message);

    const { error } = await supabase.from('contracts').insert({
      user_id: user.id,
      title: file.name,
      file_path: filePath,
      status: 'Uploaded',
    });
    if (error) Alert.alert('Save failed', error.message);
    else {
      Alert.alert('Uploaded');
      load();
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.header}>Contracts</Text>
        <TouchableOpacity onPress={uploadContract}>
          <Text style={styles.add}>+ Upload</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={contracts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.client}>{item.clients?.name || 'Unlinked'}</Text>
            <Text style={styles.status}>{item.status}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No contracts. Tap + Upload.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0a', padding: 16 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  header: { fontSize: 24, fontWeight: '700', color: '#fff' },
  add: { color: '#4ade80', fontSize: 16, fontWeight: '600' },
  card: { backgroundColor: '#1a1a1a', borderRadius: 12, padding: 16, marginBottom: 12, borderWidth: 1, borderColor: '#2a2a2a' },
  title: { fontSize: 16, fontWeight: '600', color: '#fff' },
  client: { color: '#4ade80', marginTop: 4 },
  status: { color: '#fbbf24', marginTop: 6 },
  empty: { color: '#666', textAlign: 'center', marginTop: 40 },
});
