import { Modal, View, Text, Button } from "react-native";
import { styles } from "./styles";
const CustomModal = ({ isVisible, animationType, onCancel, onDelete, selectedEvent}) => {

    return (
        <Modal visible={isVisible} animationType={animationType}>
            <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Detalle:</Text>
                <View style={styles.modalbody}>
                    <Text style={styles.modalMessage}>¿Estás seguro que querés eliminar esta tarea?</Text>
                    <Text style={styles.modalSelectedEvent}>{selectedEvent?.value}</Text>
                </View>
                <View style={styles.modalButtonsContainer}>
                    <Button
                        color={'#0B3954'}
                        title={'Cancelar'}
                        onPress={onCancel}
                    />
                    <Button
                        color={'#0B3954'}
                        title={'Eliminar'}
                        onPress={() => onDelete(selectedEvent.id)}
                    />
                </View>
            </View>
        </Modal>
    )
}

export default CustomModal