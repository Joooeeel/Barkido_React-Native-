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
            <Picker.Item label="Raza" color="grey" />
            <Picker.Item label="Poochon" value="poochon" />
            <Picker.Item label="Shepsky" value="shepsky" />
            <Picker.Item label="Husky" value="husky" />
            <Picker.Item label="Golden Retriever" value="golden retriever" />
            <Picker.Item label="Pug" value="pug" />
            <Picker.Item label="Shikoku Inu" value="shikoku inu" />
            <Picker.Item label="Weimaraner" value="weimaraner" />
            <Picker.Item label="Bulldog" value="bulldog" />
            <Picker.Item label="Husky Siberiano" value="siberian husky" />
            <Picker.Item label="Brako Alemán" value="german brako" />
            <Picker.Item label="Beagle" value="beagle" />
            <Picker.Item label="Bulldog Francés" value="french bulldog" />
            <Picker.Item label="Bóxer" value="boxer" />
            <Picker.Item label="Gran Danés" value="dogo" />
            <Picker.Item label="Crestado Chino" value="chinese crested" />
            <Picker.Item label="Bulldog" value="bulldog" />

        </Picker>
    )
}

const styles = StyleSheet.create({
    pickerStyle: {
        height: 50,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        marginBottom: 15,
    }
})