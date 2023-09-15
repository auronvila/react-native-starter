import {FlatList, StyleSheet, Text} from 'react-native';

export default function ListsScreen() {
  const data = [{
    name: 'Friend 1',
    age: 12
  },
    {
      name: 'Friend 2',
      age: 12

    },
    {
      name: 'Friend 3',
      age: 12

    },
    {
      name: 'Friend 4',
      age: 12
    },
  ]
  return (
    <FlatList keyExtractor={(item) => item.name} data={data}
              renderItem={(element) => {
                return <Text style={styles.textStyle}>{element.item.name} - {element.item.age}</Text>
              }}/>
  )
}
const styles = StyleSheet.create({
  textStyle: {
    padding: 20,
    marginLeft: 30,
  },
});