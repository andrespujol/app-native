import {
  FlatList,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Button,
  View,
} from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Input, CustomModal } from "./components/index";
import Events from "./components/Events/index";
import { useFonts } from "expo-font";
import { theme } from "./constants";

export default function App() {
  const [text, setText] = useState("");
  const [events, setEvents] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const [loaded] = useFonts({
    "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
    "Foldit-VariableFont_wght": require("../assets/fonts/Foldit-VariableFont_wght.ttf"),
  });

  if (!loaded) {
    return <ActivityIndicator size="large" color={theme.colors.primary} />;
  }

  const onHandlerConfirm = () => {
    setConfirmed(true);
  };
  const onAddEvent = () => {
    if (text.length === 0) return;
    setEvents([
      ...events,
      {
        id: Math.random().toString(),
        value: text,
      },
    ]);
    setText("");
  };

  const onHandlerEvent = (id) => {
    setModalVisible(!modalVisible);
    const selectedEvent = events.find((event) => event.id === id);
    setSelectedEvent(selectedEvent);
  };

  const onHandlerCancelModal = () => {
    setModalVisible(!modalVisible);
    setSelectedEvent(null);
  };

  const onHandlerDeleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
    setModalVisible(!modalVisible);
  };
  if (!confirmed) {
    return (
      <View style={styles.buttonContainer}>
        <Text style={styles.title}>¿Querés agregar una tarea? </Text>
        <View style={styles.buttonConfirmed}>
          <Button
            style={styles.buttonConfirmed}
            title="¡click aquí!"
            onPress={onHandlerConfirm}
            color={theme.colors.primary}
          />
        </View>
        {/* <TouchableOpacity style={styles.buttonConfirmed}>
          <Text style={styles.text}>¡Haz clic aquí!</Text>
        </TouchableOpacity> */}
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Lista de tareas</Text>
        </View>
        <Input
          placeholder={"Ingresa una tarea"}
          value={text}
          onChangeText={setText}
          buttonTitle={"+"}
          buttonColor={"#0B3954"}
          onHandlerButton={onAddEvent}
        />
        <View style={styles.listContainer}>
          <Events events={events} onSelectItem={onHandlerEvent} />
        </View>
        <CustomModal
          isVisible={modalVisible}
          animationType="slide"
          onCancel={onHandlerCancelModal}
          onDelete={onHandlerDeleteEvent}
          selectedEvent={selectedEvent}
        />
      </View>
    );
  }
}
