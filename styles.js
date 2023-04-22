import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 50,
      backgroundColor: '#fff',
      
    },
    title:{
      textAlign: 'center',
      fontSize: 20
    },
    formContainer: {
      width: '100%',
      marginHorizontal: 50,
      flexDirection: 'row',
      alignItems: 'center',
    },
    input:{
      backgroundColor: '#BFD7EA',
      color: '#212121',
      width: '70%',
      paddingHorizontal: 5,
      marginRight: 5
    },
    listContainer: {
      flex: 1,
      backgroundColor: '#fff',
      marginVertical: 20,
  },
    itemContainer:{
      height: 80,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#3481AE',
      borderRadius: 5,
      margin: 20,
      padding:10
    },
    item:{
      marginHorizontal: 10,
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    modalContainer:{
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 60,
      paddingVertical: 20,
    },
    modalTitle:{
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    modalbody:{
        paddingVertical: 20,
    },
      modalMessage:{
      fontSize: 14,
      color: '#212121',
    },
    modalSelectedEvent:{
      fontSize: 14,
      color: '#212121',
      fontWeight: 'bold',
      paddingVertical: 10,
      textAlign: 'center',
      marginBottom: 20,
    },
    modalButtonsContainer:{
      width: "80%",
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    modalButton: {

    },
  });