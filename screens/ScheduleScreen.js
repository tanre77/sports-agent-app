import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const events = [
  { date: 'Oct 30', title: 'Sofia Alvarez - Adidas call', time: '2:00 PM' },
  { date: 'Nov 5', title: 'Marcus Reed - Contract review', time: '10:00 AM' },
  { date: 'Nov 12', title: 'Elena Voss - Tournament start', time: 'All day' },
  { date: 'Nov 18', title: 'Team meeting - Q4 deals', time: '3:00 PM' },
];

export default function ScheduleScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Upcoming Schedule</Text>
      {events.map((e, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.date}>{e.date}</Text>
          <Text style={styles.title}>{e.title}</Text>
          <Text style={styles.time}>{e.time}</Text>
        </View>
      ))}
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
    borderLeftWidth: 4,
    borderLeftColor: '#4ade80',
  },
  date: { color: '#4ade80', fontWeight: '700', marginBottom: 4 },
  title: { color: '#fff', fontSize: 16 },
  time: { color: '#aaa', marginTop: 4 },
});
