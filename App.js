import { Button, Text, TextInput, View } from 'react-native';
import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.title}>Lista de tareas</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput placeholder='Ingresa una tarea' style={styles.input} />
        <Button title='+' color='#0B3954'/>
      </View>
    </View>
  );
}


