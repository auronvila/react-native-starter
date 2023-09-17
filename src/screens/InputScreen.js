import { Text, TextInput, View} from 'react-native';
import {styles} from '../styles/styles';
import {useState} from 'react';

export default function InputScreen() {
  const [text, setText] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View>
      <Text style={styles.testStyle}>Enter Your Name</Text>
      <TextInput
        onChangeText={(newValue) => setText(newValue)}
        autoCorrect={false}
        autoCapitalize={'none'}
        style={styles.inputStyle}/>
      <Text style={styles.testStyle}>My name is => {text}</Text>
      <Text style={styles.testStyle}>Enter a Password</Text>
      <TextInput
        onChangeText={(newValue) => {
          setPassword(newValue);
        }}
        secureTextEntry
        autoCorrect={false}
        autoCapitalize={'none'}
        style={styles.inputStyle}
      />
      {password.length < 5 && (
        <Text>Must be at least 5 characters</Text>
      )}
    </View>
  )
}

