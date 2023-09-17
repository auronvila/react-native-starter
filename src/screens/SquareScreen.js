import {StyleSheet, View} from 'react-native';
import ColorCounter from '../Components/ColorCounter';
import {useReducer} from 'react';

const COLOR_INCREMENT = 10

// the state is the state that we know from the use state the action is the function that we will tell how is this state going to change
// so, we can define whatever properties we want to it, but when we use the state we need to define it as an argument
function reducer(state, action) {
// state === {red:number, green:number, blue:number}
// action === {type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15}

  switch (action.type) {
    case 'change_red':
      // never do ---> state.red = state.red -15
      return state.red + action.payload > 255 || state.red + action.payload < 0 ? state : {
        ...state, red: state.red + action.payload
      }
    case 'change_green':
      return state.green + action.payload > 255 || state.green + action.payload < 0 ? state : {
        ...state, green: state.green + action.payload
      }
    case 'change_blue':
      return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state : {
        ...state, blue: state.blue + action.payload
      }
    default:
      return state
  }
}

export default function SquareScreen() {
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})

  return (
    <View>
      <ColorCounter
        onIncrease={() => dispatch({type: 'change_red', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_red', payload: -1 * COLOR_INCREMENT})}
        color={'red'}
        title={'Red'}/>
      <ColorCounter
        color={'blue'}
        title={'Blue'}
        onIncrease={() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_blue', payload: -1 * COLOR_INCREMENT})}
      />
      <ColorCounter
        color={'green'}
        title={'Green'}
        onIncrease={() => dispatch({type: 'change_green', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_green', payload: -1 * COLOR_INCREMENT})}
      />
      <View style={{marginTop: 60, alignItems: 'center'}}>
        <View style={{height: 150, width: 150, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`}}/>
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