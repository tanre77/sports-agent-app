import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { supabase } from '../lib/supabase';

export default function AddClientScreen({ navigation }) {
  const [name, setName] = useState('');
  const [sport, setSport] = useState('');
  const [position, setPosition] = useState('');
  const [team, setTeam] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);

  async function save() {
    if (!name.trim()) return Alert.alert('Name required');
    setLoading(true);
    const { data: { user } } = await supabase.auth.getUser();
    const { error } = await supabase.from('clients').insert({
      user_id: user.id,
      name,
      sport,
      position,
      team,
      notes,
    });
    setLoading(false);
    if (error) Alert.alert('Error', error.message);
    else {
      Alert.alert('Saved');
      navigation.goBack();
    }
  }

  return (
    <ScrollView style={styles.container}>
      <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#666" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Sport" placeholderTextColor="#666" value={sport} onChangeText={setSport} />
      <TextInput style={styles.input} placeholder="Position" placeholderTextColor="#666" value={position} onChangeText={setPosition} />
      <TextInput style={styles.input} placeholder="Team" placeholderTextColor="#666" value={team} onChangeText={setTeam} />
      <TextInput style={[styles.input, { height: 100 }]} placeholder="Notes" placeholderTextColor="#666" value={notes} onChangeText={setNotes} multiline />
      <TouchableOpacity style={styles.button} onPress={save} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? 'Saving...' : 'Save Client'}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0a', padding: 16 },
  input: { backgroundColor: '#1a1a1a', color: '#fff', borderRadius: 8, padding: 14, marginBottom: 12, fontSize: 16 },
  button: { backgroundColor: '#4ade80', borderRadius: 8, padding: 16, alignItems: 'center', marginTop: 8 },
  buttonText: { color: '#000', fontWeight: '700', fontSize: 16 },
});
