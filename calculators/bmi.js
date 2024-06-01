import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity, View, Text, TextInput } from 'react-native';


const Bmi = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState('');

    const calculate = () => {
        const weightNum = parseFloat(weight);
        const heightNum = parseFloat(height);
        if (!isNaN(weightNum) && !isNaN(heightNum) && heightNum > 0) {
            const result = weightNum / (heightNum * heightNum);
            setBmi(result.toFixed(2));
        } else {
            setBmi('Invalid input');
        }
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>BMI Calculator</Text>
            <View style={styles.calcWrapper}>
                <View>
                    <Text style={styles.result}>{bmi}</Text>
                </View>
                <Text style={styles.text}>Enter your weight: </Text>
                <TextInput style={styles.inputField} value={weight} onChangeText={text => setWeight(text)} 
                placeholder={'Weight (in kgs)'} keyboardType='numeric'/>
                <Text style={styles.text}>Enter your height: </Text>
                <TextInput style={styles.inputField} value={height} onChangeText={text => setHeight(text)} 
                placeholder={'Height (in m)'} keyboardType='numeric'/>

                <TouchableOpacity>
                    <Text style={styles.button} onPress={() => {calculate(height, weight)}}>Calculate</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        width: 'auto',
        backgroundColor: 'aquamarine',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    result: {
        fontSize: 30,
        padding: 10,
    },
    text: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputField: {
        fontSize: 15,
        backgroundColor: '#fff',
        padding: 10,
    },
    button: {
        fontSize: 25,
        width: '100%',
        backgroundColor: 'blue',
        borderRadius: 30,
        marginVertical: 20,
        textAlign: 'center',
        color: '#fff',
    }
})

export default Bmi;