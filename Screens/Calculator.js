import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Switch,
  TextInput,
} from 'react-native';
import { PermissionsAndroid } from 'react-native';
const Calculator = ({ navigation }) => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
    title: 'Contacts',
    message: 'This app would like to view your contacts.',
    buttonPositive: 'Please accept bare mortal',
})
    .then((res) => {
        console.log('Permission: ', res);
        Contacts.getAll()
            .then((contacts) => {
                // work with contacts
                console.log(contacts);
            })
            .catch((e) => {
                console.log(e);
            });
    })
    .catch((error) => {
        console.error('Permission error: ', error);
    });
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isChecked1, setChecked1] = useState(true);
  const [clr, setClr] = useState({ bgcolor: '#EEEEEE', txt: 'black' });
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const toggleDarkMode = () => {
    setChecked1(!isChecked1);
    if (isChecked1) {
      setClr({ bgcolor: '#272829', txt: 'white' });
    } else {
      setClr({ bgcolor: 'white', txt: 'black' });
    }
  };

  const handleOperation = (operation) => {
    switch (operation) {
      case '=':
        if (input) {
          try {
            const calculatedResult = eval(input);
            setResult(calculatedResult.toString());
          } catch (error) {
            setResult('Error');
          }
        }
        break;
      case 'C':
        setInput('');
        setResult('');
        break;
      case '%':
        setInput(input + '/100*');
        break;
      case 'x':
        setInput(input.slice(0, -1));
        break;
      case '.':
        if (!input.includes('.')) {
          setInput(input + operation);
        }
        break;
      case 'sin':
      case 'cos':
      case 'tan':
        setInput(`Math.${operation}(${input})`);
        break;
      default:
        setInput(input + operation);
        break;
    }
  };
  

  const buttons = [
    'C', 'x', '%', '+/-', '7', '8', '9', '/',
    '4', '5', '6', '*', '1', '2', '3', '-','sin', 'cos', 'tan','+',
     '.','0',  '=', 
  ];

  const rows = [];
  for (let i = 0; i < buttons.length; i += 4) {
    rows.push(buttons.slice(i, i + 4));
  }

  return (
    <View style={{ backgroundColor: clr.bgcolor, height: '100%' }}>
      <View
        style={{
          backgroundColor: 'lightgray',
          width: 55,
          height: 30,
          borderRadius: 12,
          alignSelf: 'center',
          margin: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Switch
          style={styles.themeSwitch}
          value={isChecked1}
          onValueChange={toggleDarkMode}
        />
      </View>

      <TextInput
        style={{
          height: 60,
          alignSelf: 'flex-end',
          color: 'gray',
          marginBottom: 10,
          fontSize: 29,
          paddingHorizontal: 10,
        }}
        keyboardType="numeric"
        value={input}
        onChangeText={setInput}
      />

      <Text style={{ fontSize: 55, color: clr.txt, alignSelf: 'center', fontWeight: "900" }}>
        {result || '0'}
      </Text>

      <View style={{ flexDirection: 'column' }}>
        {rows.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((button) => (
              <TouchableOpacity
                key={button}
                style={button === '=' || button === 'C' ? styles.btnclr1 : styles.btnclr}
                onPress={() => handleOperation(button)}
              >
                <Text style={button === '=' || button === 'C' ? { color: 'white', fontSize: 35 } : { color: clr.txt, fontSize: 25 }}>
                  {button}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

    </View>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  btnclr: {
    backgroundColor: 'gray',
    height: 70,
    width: 70,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnclr1: {
    backgroundColor: 'blue',
    height: 70,
    width: 70,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  themeSwitch: {
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
});
