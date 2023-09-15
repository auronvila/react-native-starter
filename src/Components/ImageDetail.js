import {Image, StyleSheet, Text, View} from 'react-native';

export default function ImageDetail(props) {
  return(
    <View>
      <Text style={styles.testStyle}>
        {`${props.text} score-${props.score}`}
      </Text>
      <Image source={props.src}/>
    </View>
  )
}

const styles = StyleSheet.create({
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
    marginTop:20,
    textAlign:'center',
    fontSize: 15,
  }
})