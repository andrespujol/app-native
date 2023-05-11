import { StyleSheet } from "react-native";
import { theme } from "./constants/theme";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: "#fff",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Montserrat-Bold",
    marginBottom: 2,
  },

  listContainer: {
    flex: 1,
    backgroundColor: "#fff",
    marginVertical: 20,
  },
  buttonContainer: {
    flex: 1,
    marginTop: 100,
  },
  buttonConfirmed: {
    flex: 6,
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 10,
    width: 100,
    height: 10,
    // backgroundColor: theme.colors.primary,
  },
});
