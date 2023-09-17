import React from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';
import {styles} from '../styles/styles';

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.testStyle}>
        HomeScreen
      </Text>
      <Button onPress={() => props.navigation.navigate('Component') } touchSoundDisabled title={'go to components demo'}/>
      <TouchableOpacity touchSoundDisabled onPress={() => props.navigation.navigate('Lists')}><Text style={styles.button}>Go to list demo</Text></TouchableOpacity>
      <TouchableOpacity touchSoundDisabled onPress={() => props.navigation.navigate('Image')}><Text style={styles.button}>Go to Images</Text></TouchableOpacity>
      <TouchableOpacity touchSoundDisabled onPress={() => props.navigation.navigate('Counter')}><Text style={styles.button}>Go to Counter Demo</Text></TouchableOpacity>
      <TouchableOpacity touchSoundDisabled onPress={() => props.navigation.navigate('Color')}><Text style={styles.button}>Go to Colors Demo</Text></TouchableOpacity>
      <TouchableOpacity touchSoundDisabled onPress={() => props.navigation.navigate('Square')}><Text style={styles.button}>Go to Custom Colors Demo</Text></TouchableOpacity>
      <TouchableOpacity touchSoundDisabled onPress={() => props.navigation.navigate('Input')}><Text style={styles.button}>Go to Custom Inputs Demo</Text></TouchableOpacity>
    </View>);
};



export default HomeScreen;
