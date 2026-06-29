import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

const AnimatedImage = () => {
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Usamos Spring para un efecto de rebote
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3, // Controla la resistencia del rebote
      tension: 50, // Controla la velocidad
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image 
        source={{ uri: 'https://i.kym-cdn.com/entries/icons/original/000/056/908/droolingcatscover.jpg' }}
        style={[styles.logo, { transform: [{ scale: scaleAnim }] }]} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center' },
  logo: { width: 300, height: 300 },
});

export default AnimatedImage;