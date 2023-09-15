import {StyleSheet, Text, View} from 'react-native';
import ImageDetail from '../Components/ImageDetail';

export default function ImageScreen() {
  return (
    <View style={styles.container}>
      <ImageDetail score={3} src={require('../../assets/beach.jpg')} text={'Beach Image'}/>
      <ImageDetail score={5} src={require('../../assets/forest.jpg')} text={'Forest Image'}/>
      <ImageDetail score={10} src={require('../../assets/mountain.jpg')} text={'Mountain Image'}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
  },
  textStyle: {
    justifyContent: 'center',
    display: 'flex',
    marginHorizontal: 5,
    padding: 5,
    fontSize: 45,
    color: 'white',
    backgroundColor: 'black'
  },
  testStyle: {
    justifyContent: 'center',
    display: 'flex',
    fontSize: 30,
  }
})