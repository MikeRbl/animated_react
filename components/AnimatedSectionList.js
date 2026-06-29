import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

const datosSeccionados = [
  { title: 'Grupo A', data: ['Elemento A1', 'Elemento A2'] },
  { title: 'Grupo B', data: ['Elemento B1', 'Elemento B2'] }
];

const AnimatedSectionList = () => {
  const slideAnim = useRef(new Animated.Value(-300)).current; // Inicia fuera de la pantalla a la izquierda

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0, // Llega al centro
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.SectionList
      sections={datosSeccionados}
      keyExtractor={(item, index) => item + index}
      style={{ transform: [{ translateX: slideAnim }], width: '100%' }}
      renderItem={({ item }) => <View style={styles.item}><Text>{item}</Text></View>}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  header: { fontSize: 20, backgroundColor: '#f4f4f4', padding: 5, marginTop: 10 },
  item: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }
});

export default AnimatedSectionList;