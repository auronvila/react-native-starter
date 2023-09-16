import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import ColorCounter from '../Components/ColorCounter';
import {useState} from 'react';

const COLOR_INCREMENT = 10
export default function SquareScreen() {
  const [red, setRed] = useState(0)
  const [blue, setBlue] = useState(0)
  const [green, setGreen] = useState(0)

  const setColor = (color, change) => {
    switch (color) {
      case 'red':
        (red + change > 255 || red + change < 0) ? null : setRed(red + change)
        return;
      case 'blue':
        (blue + change > 255 || blue + change < 0) ? null : setBlue(blue + change)
        return;
      case 'green':
        (green + change > 255 || green + change < 0) ? null : setGreen(green + change)
        return;
      default:
        return;
    }
  }


  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor('red', COLOR_INCREMENT)}
        onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
        color={'red'}
        title={'Red'}/>
      <ColorCounter
        color={'blue'}
        title={'Blue'}
        onIncrease={() => setColor('blue', COLOR_INCREMENT)}
        onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        color={'green'}
        title={'Green'}
        onIncrease={() => setColor('green', COLOR_INCREMENT)}
        onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
      />
      <View style={{marginTop: 60, alignItems: 'center'}}>
        <View style={{height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    fontSize: 17,
    paddingVertical: 8,
    backgroundColor: 'blue',
    color: 'white',
    marginTop: 20,
    textAlign: 'center',
  },
  testStyle: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 30,
  }
});