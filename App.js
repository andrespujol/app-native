import { Button, FlatList, Text, TextInput, TouchableOpacity, Modal, View } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export default function App() {
  const [text, setText] = useState('')
  const [events, setEvents] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)

  const onAddEvent = () => {
    if(text.length === 0) return;
    setEvents([
      ...events, 
      {
        id: Math.random().toString(),
        value: text
      }
    ])
    setText('')
  }

  const onHandlerEvent = (id) => {
    setModalVisible(true)
    const selectedEvent = events.find ((event) => event.id === id)
    setSelectedEvent(selectedEvent)
  }
  const onHandlerCancelModal = () => {
    setModalVisible(!modalVisible);
    setSelectedEvent(null);
  }
  const onHandlerDeleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
    setModalVisible(!modalVisible);
  }

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.itemContainer} onPress={() => onHandlerEvent(item.id)}>
        <Text style={styles.item}>{item.value}</Text>
      </TouchableOpacity>
      )
  }

  return (
    <View style={styles.container}>
        <View >
<Text style={styles.title}>Lista de tareas</Text>
</View>
      <View style={styles.formContainer}>
        <TextInput 
          placeholder='Ingresa una tarea' 
          style={styles.input}
          value={text}
          onChangeText={(text)=> setText(text) }
          />
        <Button title='+' color='#0B3954'  onPress={onAddEvent}/>
      </View>
      <View style={styles.listContainer}>
        <FlatList 
          renderItem={renderItem}
          data={events}
          keyExtractor={(item) =>item.id}
          alwaysBounceVertical={false}
          />
      </View>
      <Modal visible={modalVisible} animationType='slide'>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Detalle:</Text>
          <View style={styles.modalbody}>
            <Text style={styles.modalMessage}>¿Estás seguro que querés eliminar esta tarea?</Text>
            <Text style={styles.modalSelectedEvent}>{selectedEvent?.value}</Text>
          </View>
          <View style={styles.modalButtonsContainer}>
            <Button 
            color='#0B3954'
            title='Cancelar'
            onPress={() => onHandlerCancelModal()}
            />
            <Button 
              color='#0B3954'
              title='Eliminar'
              onPress={() => onHandlerDeleteEvent(selectedEvent.id)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}