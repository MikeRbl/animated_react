import { useEffect, useState,StyleSheet } from 'react';
import { Text, View, Animated } from 'react-native';

const Animacion_1 = () => {
    const [animacion] = useState(new Animated.Value(0))

    useEffect(()=>{
        Animated.timing(animacion,{
            toValue:1, //el valor al que va a llegar 
            duraion:500 // tiempo en milisegundos
        }).start();
    },[])

    return (
        <Animated.View
        style={{opacity:animacion}}>
            <Text style = {styles.texto}> Animacion 1</Text>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    texto:{
        fontsize:20,
        textAligne:'center'
    }

})

export default Animacion_1