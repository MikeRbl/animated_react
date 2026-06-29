import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

const AnimatedSrollView = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Usamos Timing para una transición suave de opacidad
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500, // 1.5 segundos
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.ScrollView style={[styles.scroll, { opacity: fadeAnim }]}>
      <View style={styles.caja}><Text>Item 1</Text></View>
      <View style={styles.caja}><Text>Item 2</Text></View>
      <View style={styles.caja}><Text>Item 3</Text></View>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: { flex: 1, width: '100%', marginTop: 20 },
  caja: { padding: 20, backgroundColor: 'lightgreen', marginVertical: 5, alignItems: 'center' }
});

export default AnimatedSrollView;