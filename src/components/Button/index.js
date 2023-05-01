import { Button } from "react-native";

const ButtonDefault = ({ buttonColor, buttonTitle }) => {
  return (
    <Button
      color={buttonColor}
      title={buttonTitle}
      onPress={() => onHandlerEvent(selectedEvent.id)}
    />
  );
};
export default ButtonDefault;
