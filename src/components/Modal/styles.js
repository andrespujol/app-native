import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    paddingVertical: 20,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalbody: {
    paddingVertical: 20,
  },
  modalMessage: {
    fontSize: 14,
    color: "#212121",
  },
  modalSelectedEvent: {
    fontSize: 14,
    color: "#212121",
    fontWeight: "bold",
    paddingVertical: 10,
    textAlign: "center",
    marginBottom: 20,
  },
  modalButtonsContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  modalButton: {},
});

onHandlerCancelModal;
onHandlerDeleteEvent;
