import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity, View, Text, TextInput } from 'react-native';

const Calc = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');
    const [operator, setOperator] = useState('');

    const handleNumberPress = (num) => {
        if (operator === '') {
            setNum1(num1 + num);
        } else {
            setNum2(num2 + num);
        }
    };

    const handleOperatorPress = (op) => {
        if (num1 !== '') {
            setOperator(op);
        }
    };

    const calculateResult = () => {
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);
        if (!isNaN(number1) && !isNaN(number2)) {
            let res = 0;
            switch (operator) {
                case '+':
                    res = number1 + number2;
                    break;
                case '-':
                    res = number1 - number2;
                    break;
                case '*':
                    res = number1 * number2;
                    break;
                case '/':
                    res = number1 / number2;
                    break;
                default:
                    break;
            }
            setResult(res.toString());
        }
    };

    const handleClear = () => {
        setNum1('');
        setNum2('');
        setOperator('');
        setResult('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Simple Calculator</Text>
            <View style={styles.calcWrapper}>
                <TextInput
                    style={styles.display}
                    value={result || num1 + operator + num2}
                    editable={false}
                    placeholder=''
                />
                <View style={styles.buttonWrapper}>
                    <View style={styles.numbers}>
                        <View style={styles.operands}>
                            {['7', '8', '9', '4', '5', '6', '1', '2', '3'].map(num => (
                                <TouchableOpacity key={num} style={styles.button} onPress={() => handleNumberPress(num)}>
                                    <Text style={styles.buttonText}>{num}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        <View style={styles.other}>
                            <TouchableOpacity style={styles.button} onPress={handleClear}>
                                <Text style={styles.buttonText}>C</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(num)}>
                                <Text style={styles.buttonText}>0</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={calculateResult}>
                                <Text style={styles.buttonText}>=</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                    <View style={styles.operators}>
                        {['+', '-', '*', '/'].map(op => (
                            <TouchableOpacity key={op} style={styles.button} onPress={() => handleOperatorPress(op)}>
                                <Text style={styles.buttonText}>{op}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E8EAED',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    calcWrapper: {
        width: '80%',
        margin: 20,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
    },
    display: {
        height: 50,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        fontSize: 24,
        textAlign: 'right',
        backgroundColor: '#FFF',
    },
    buttonWrapper: {
        display: 'flex',
        flexDirection: 'row',
    },
    numbers: {
        width: '75%',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    other: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    operands: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    operators: {
        width: '70%',
        marginHorizontal: 20,
        flexDirection: 'column',
    },
    button: {
        width: '30%',
        height: 50,
        backgroundColor: '#55BCF6',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 5,
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default Calc;