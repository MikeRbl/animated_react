import { View, Text, Animated, StyleSheet } from 'react-native'
import React, {useEffect, useState} from 'react'


const Animacion_1 = () => {
    const [animacion] = useState(new Animated.Value(0))

    useEffect(()=>{
        Animated.timing(animacion,{
            toValue:450, //el valor al que va a llegar 
            duraion:10000 // tiempo en milisegundos
        }).start();
    },[])

    return(
        <Animated.View
        style={styles.caja, {width:animacion}}>
        </Animated.View>
    )

}

const styles = StyleSheet.create({
    caja:{
        width:100,
        height:100,
        backgroundColor:'cornflowerblue'
    }

})