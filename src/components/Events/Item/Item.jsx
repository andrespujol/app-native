import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const EventItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => onHandlerEvent(item.id)}
      >
        <Text style={styles.item}>{item.value}</Text>
      </TouchableOpacity>
    );
  };

export default EventItem;