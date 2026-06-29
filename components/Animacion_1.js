import { View, Text, Animated, StyleSheet } from 'react-native';
import React, {useEffect, useState} from 'react';

const Animacion_2 = () => { // Nombre corregido
    const [animacion] = useState(new Animated.Value(0))

    useEffect(()=>{
        Animated.timing(animacion,{
            toValue: 450, 
            duration: 10000, // Corregido
            useNativeDriver: false // Requerido en false para animar 'width'
        }).start();
    },[])

    return(
        <Animated.View
            style={[styles.caja, {width: animacion}]}> {/* Sintaxis de arreglo corregida */}
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    caja:{
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
})

export default Animacion_2; // Exportación agregada