import { StatusBar } from 'expo-status-bar';
<<<<<<< Updated upstream
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Animacion_2/>
=======

// Importación de tus nuevos componentes animados
import AnimatedImage from './components/AnimatedImage';
import AnimatedSrollView from './components/AnimatedScrollView';
import AnimatedFlatList from './components/AnimatedFlatList';
import AnimatedSectionList from './components/AnimatedSectionList';
import AnimacionLista from './components/AnimacionLista';

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
      case 'animacionlista':
        return <AnimacionLista />
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
            <Text style={styles.textoBoton}>Animated.Image</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.boton} 
            onPress={() => setAnimacionSeleccionada('scroll')}
          >
            <Text style={styles.textoBoton}>Animated.ScrollView</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.boton} 
            onPress={() => setAnimacionSeleccionada('flatlist')}
          >
            <Text style={styles.textoBoton}>Animated.FlatList</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.boton} 
            onPress={() => setAnimacionSeleccionada('sectionlist')}
          >
            <Text style={styles.textoBoton}>Animated.SectionList</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.boton} 
            onPress={() => setAnimacionSeleccionada('animacionlista')}
          >
            <Text style={styles.textoBoton}>Animacion Lista</Text>
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
>>>>>>> Stashed changes
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
