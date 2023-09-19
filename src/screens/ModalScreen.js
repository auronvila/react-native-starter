import {ActivityIndicator, Button, Modal, StatusBar, Text, View} from 'react-native';
import {useState} from 'react';

export default function ModalScreen() {
  const [modal, setModal] = useState(false)
  const [modal1, setModal1] = useState(false)
  const [statusBar, setStatusBar] = useState(false)
  return (
    <View style={{backgroundColor: 'grey', flex: 1, padding: 30}}>
      {!statusBar && <Button color={'black'} title={'press to open the modal'} onPress={() => {
        setStatusBar(true)
        setTimeout(() => {
          setModal(true)
        }, 2000)
      }}/>}
      { !statusBar && <Button color={'blue'} title={'press to open the modal 1'} onPress={() => setModal1(true)}/>}
      <Modal presentationStyle={'pageSheet'} animationType={'slide'} onRequestClose={() => setModal(false)}
             visible={modal}>
        <View style={{padding: 30}}>
          <Text>Modal Content</Text>
          <Button title={'press to close the modal'} color={'midnightblue'} onPress={() => {
            setStatusBar(false)
            setModal(false)
          }}/>
        </View>
      </Modal>

      <Modal presentationStyle={'pageSheet'} animationType={'fade'} onRequestClose={() => setModal1(false)}
             visible={modal1}>
        <View style={{padding: 30}}>
          <Text>Modal Content</Text>
          <Button title={'press to close the modal'} color={'midnightblue'} onPress={() => setModal1(false)}/>
        </View>
      </Modal>
      <StatusBar showHideTransition={'slide'} hidden={statusBar} animated barStyle={'light-content'}/>
      <ActivityIndicator animating={statusBar} size={'large'} color={'blue'}/>
    </View>
  )
}