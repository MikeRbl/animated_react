import { useEffect, useState } from 'react';
import { Text, View, Animated, StyleSheet } from 'react-native'; // StyleSheet corregido

const Animacion_1 = () => {
    const [animacion] = useState(new Animated.Value(0))

    useEffect(()=>{
        Animated.timing(animacion,{
            toValue: 1, 
            duration: 500, // Corregido (duraion -> duration)
            useNativeDriver: true // Requerido para animar opacidad
        }).start();
    },[])

    return (
        <Animated.View style={{opacity:animacion}}>
            <Text style={styles.texto}> Animacion 1</Text>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    texto:{
        fontSize: 20, // Corregido
        textAlign: 'center' // Corregido
    }
})

export default Animacion_1;