import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Flex() {
  return (
    <View style={styles.container}>
      <View style={styles.caja1}></View>
      <View style={styles.caja1}></View>
      <View style={styles.caja1}></View>
      <View style={styles.caja1}></View>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //Direccionamiento original de columnas
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'flex-end' //Centrado del contenido
    
  },
  caja1: {
    padding: 20,
    backgroundColor: 'navy',
  },
  caja2: {
    padding: 20,
    backgroundColor: 'yellow',
  },
  caja3: {
    padding: 20,
    backgroundColor: 'teal',
  },
  caja4: {
    padding: 20,
    backgroundColor: 'green',
  },
});

export default Flex
