import React from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.testStyle}>
        HomeScreen
      </Text>
      <Button onPress={() => props.navigation.navigate('Component') } touchSoundDisabled title={'go to components demo'}/>
      <TouchableOpacity touchSoundDisabled onPress={() => props.navigation.navigate('Lists')}><Text style={styles.button}>Go to list demo</Text></TouchableOpacity>
      <TouchableOpacity touchSoundDisabled onPress={() => props.navigation.navigate('Image')}><Text style={styles.button}>Go to Images</Text></TouchableOpacity>
    </View>);
};

const styles = StyleSheet.create({
  button:{
    fontSize:17,
    paddingVertical:8,
    backgroundColor:'blue',
    color:'white',
    marginTop:20,
    textAlign:'center',
  },
  testStyle: {
    marginVertical:20,
    textAlign:'center',
    fontSize: 30,
  }
});

export default HomeScreen;
