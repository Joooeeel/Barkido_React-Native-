import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from '@react-native-community/picker'

export default ({ onSelect }) => {
    const [raza, setRaza] = useState("");

    const changeState = value => {
        setRaza(value);
        onSelect(value);
    }

    return (
        <Picker
            selectedValue={raza}
            style={styles.pickerStyle}
            onValueChange={(itemValue, itemIndex) => changeState(itemValue)}
        >
            <Picker.Item label="Tipo Animal" color="grey"/>
            <Picker.Item label="Perro" value="dog" />
            <Picker.Item label="Gato" value="cat" />
            <Picker.Item label="Conejo" value="rabbit" />
            <Picker.Item label="Hamster" value="hamster" />
            <Picker.Item label="Cobaya" value="guinea pig" />
            <Picker.Item label="Ave" value="bird" />
            <Picker.Item label="Animal Exótico" value="other" />


        </Picker>
    )
}

const styles = StyleSheet.create({
    pickerStyle: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderColor: 'lightgrey',
        marginBottom: 15,
    }
})