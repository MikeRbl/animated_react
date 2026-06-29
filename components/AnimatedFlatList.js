import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

const datos = [{ id: '1', title: 'Fila 1' }, { id: '2', title: 'Fila 2' }, { id: '3', title: 'Fila 3' }];

const AnimatedFlatList = () => {
  const translateYAnim = useRef(new Animated.Value(200)).current; // Inicia 200px abajo

  useEffect(() => {
    Animated.spring(translateYAnim, {
      toValue: 0, // Regresa a su posición original (0)
      friction: 5,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.FlatList
      data={datos}
      keyExtractor={item => item.id}
      style={{ transform: [{ translateY: translateYAnim }], width: '100%' }}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text>{item.title}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: { padding: 15, backgroundColor: 'gold', marginVertical: 8, marginHorizontal: 16 }
});

export default AnimatedFlatList;