import {Alert, Button, View} from 'react-native';

export default function AlertScreen() {
  return (
    <View style={{flex: 1, padding: 30, backgroundColor: 'gray'}}>
      <Button onPress={() => Alert.alert('Invalid Data')} title={'Open the alert'}/>
      <Button onPress={() => Alert.alert('Invalid Data','message specified')} title={'Open the alert2'}/>
      <Button onPress={() => Alert.alert('Invalidd Data', 'DOB is incorrect (message)', [
        {
          text: 'cancel',
          onPress: () => console.log('pressed')
        },
        {
          text: 'ok',
          onPress: () => console.log('pressed')
        },
      ])} title={'Open the alert 3 '}/>
    </View>
  )
}