import {StyleSheet} from 'react-native';

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
    flexDirection:'row',
    height:127,
  },
  BoxTextStyle:{
    height:100,
    borderWidth: 3,
  },
  textOneBgColor: {
    borderColor: 'red',
  },
  textThreeBgColor: {
    borderColor: 'blue',
  },
  textTwoStyle: {
    flex:1,
    borderWidth: 3,
    alignSelf:'flex-end',
    borderColor: 'red',
    marginTop:20,
  },
});