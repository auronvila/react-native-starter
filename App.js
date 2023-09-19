import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import ListsScreen from './src/screens/ListsScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import InputScreen from './src/screens/InputScreen';
import BoxScreen from './src/screens/BoxScreen';
import ModalScreen from './src/screens/ModalScreen';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentScreen,
    Lists: ListsScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Input: InputScreen,
    Box: BoxScreen,
    Modal: ModalScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
