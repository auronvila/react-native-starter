import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import ListsScreen from './src/screens/ListsScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentScreen,
    Lists: ListsScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
