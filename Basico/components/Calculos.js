import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, TextInput, Button, TouchableOpacity } from 'react-native';

const Calculos = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [resultado, setResultado] = useState('Informe dois numeros');

    const _somar = () =>{
        if (num1 != '' && num2 != ''){
            setResultado(Number(num1) + Number(num2));
        }else{  
           setResultado('Preenchimento Obrigatorio!');
        }
    }
    const _limpar = () =>{
        setNum1('');
        setNum1('');
        setResultado('Informe dois numeros')
    }
    return(
        <View style={styles.container}>

        <Text style={styles.titulo}>Somar</Text>

        <TextInput
        style={styles.campo}
        placeholder="Digite o primeiro numero"
        onChangeText = { num1 => setNum1(num1)}
        value={String(num1)}
        />
        
        <TextInput
        style={styles.campo}
        placeholder="Digite o segundo numero"
        onChangeText = { num2 => setNum2(num2)}
        value={String(num2)}
        />

        <Text style={styles.botaoTexto}>Resultado:</Text>
        <Text style={styles.botaoTexto}>{resultado}</Text>
        
        
        <TouchableOpacity style={styles.botaoContainer} onPress={_somar}>
        <Text style={styles.botaoTexto}>Somar</Text>    
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoContainer} onPress={_limpar}>
        <Text style={styles.botaoTexto}>Limpar</Text>    
        </TouchableOpacity>

        </View>
    );

};
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#300202',
        width: 300,
        borderRadius: 5,
        padding: 10,
        margin: 10
    },
    titulo:{
        fontSize: 16,
        color: "#ffbb00",
        fontWeight: 'bold',
        textAlign: 'center'
    },
    campo:{
        backgroundColor: "white",
        fontSize: 14,
        height: 35,
        marginBottom: 5,
        marginTop: 5,
        borderRadius: 5,
        textAlign: 'center'
    },
    botaoContainer: {
        marginBottom: 5,
        marginTop: 5,
        borderRadius: 5,
        height: 40,
        borderWidth: 2,
        borderColor: "#ffa600",
        backgroundColor: "#ffa600",
        justifyContent: "center",
        alignItems: "center"
    },
    botaoTexto: {
        fontSize: 16,
        color: "#ffffff"
    }
});

export default Calculos;