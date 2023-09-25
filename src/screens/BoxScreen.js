import {Text, View} from 'react-native';
import {styles} from '../styles/styles';


export default function BoxScreen(){
  return(
    <View style={styles.viewStyle}>
      <Text style={[styles.BoxTextStyle,styles.textOneBgColor]}>Box Screen #1</Text>
      <Text style={styles.textTwoStyle}>Box Screen #2</Text>
      <Text style={[styles.BoxTextStyle,styles.textThreeBgColor]}>Box Screen #3</Text>
    </View>
  )
}