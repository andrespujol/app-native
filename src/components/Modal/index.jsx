import { Modal, View, Text } from "react-native";
import { styles } from "./styles";
import { ButtonDefault } from '../index';
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
                    <ButtonDefault
                        color={'#0B3954'}
                        title={'Cancelar'}
                        onPress={onCancel}
                    />
                    <ButtonDefault
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