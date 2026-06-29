import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Importación de tus nuevos componentes animados
import AnimatedImage from './components/AnimatedImage';
import AnimatedSrollView from './components/AnimatedScrollView';
import AnimatedFlatList from './components/AnimatedFlatList';
import AnimatedSectionList from './components/AnimatedSectionList';

export default function App() {
  // Estado para controlar qué animación se está mostrando
  const [animacionSeleccionada, setAnimacionSeleccionada] = useState(null);

  // Función para renderizar el componente elegido
  const renderAnimacion = () => {
    switch (animacionSeleccionada) {
      case 'image':
        return <AnimatedImage />;
      case 'scroll':
        return <AnimatedSrollView />;
      case 'flatlist':
        return <AnimatedFlatList />;
      case 'sectionlist':
        return <AnimatedSectionList />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {animacionSeleccionada === null ? (
        // Pantalla Principal: Menú de Selección
        <View style={styles.menuContainer}>
          <Text style={styles.titulo}>Selecciona una Animación</Text>
          
          <TouchableOpacity 
            style={styles.boton} 
            onPress={() => setAnimacionSeleccionada('image')}
          >
            <Text style={styles.textoBoton}>Animated.Image (Spring)</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.boton} 
            onPress={() => setAnimacionSeleccionada('scroll')}
          >
            <Text style={styles.textoBoton}>Animated.ScrollView (Timing)</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.boton} 
            onPress={() => setAnimacionSeleccionada('flatlist')}
          >
            <Text style={styles.textoBoton}>Animated.FlatList (Spring)</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.boton} 
            onPress={() => setAnimacionSeleccionada('sectionlist')}
          >
            <Text style={styles.textoBoton}>Animated.SectionList (Timing)</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // Vista de la Animación Activa
        <View style={styles.animacionContainer}>
          {/* Botón para regresar al menú principal */}
          <View style={styles.regresarContainer}>
            <Button 
              title="← Volver al Menú" 
              onPress={() => setAnimacionSeleccionada(null)} 
              color="#333"
            />
          </View>
          
          {/* Contenedor donde se dibuja el componente animado */}
          <View style={styles.contenidoAnimacion}>
            {renderAnimacion()}
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#222',
  },
  boton: {
    backgroundColor: 'cornflowerblue',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  textoBoton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  animacionContainer: {
    flex: 1,
    paddingTop: 50, // Espacio para no chocar con la barra de estado
  },
  regresarContainer: {
    alignItems: 'flex-start',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  contenidoAnimacion: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});