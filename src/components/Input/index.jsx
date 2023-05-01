import React from 'react'
import { Button, TextInput, View } from 'react-native';
import { styles } from './styles';


const Input = ({ placeholder, value, onChangeText, buttonTitle, buttonColor, onHandlerButton }) => {
    return (
        <View style={styles.formContainer}>
            <TextInput
                placeholder={placeholder}
                style={styles.input}
                value={value}
                onChangeText={(text) => onChangeText(text)}
            />
            <Button title={buttonTitle} color={buttonColor} onPress={onHandlerButton} />
        </View>
    )
}

export default Input