import {Dimensions, StyleSheet} from 'react-native';

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

export const styles = StyleSheet.create({
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
  },
  inputStyle: {
    margin: 20,
    borderColor: 'black',
    borderWidth: 1,
    height: 35,
  },
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    flexDirection: 'row',
    height: 127,
  },
  BoxTextStyle: {
    height: 100,
    borderWidth: 3,
  },
  textOneBgColor: {
    borderColor: 'red',
  },
  textThreeBgColor: {
    borderColor: 'blue',
  },
  textTwoStyle: {
    flex: 1,
    borderWidth: 3,
    alignSelf: 'flex-end',
    borderColor: 'red',
    marginTop: 20,
  },
  boxShadow: {
    shadowColor: '#333333',
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  androindShadow: {
    elevation: 10,
    shadowColor: 'green'
  },
  dynamicStyles: {
    width: windowWidth > 500 ? '70%' : '90%',
    height: windowHeight > 600 ? '60%' : '90%',
    fontSize: windowWidth > 500 ? 50 : 24
  }
});