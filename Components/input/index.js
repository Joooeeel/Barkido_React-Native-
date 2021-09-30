import React from 'react';
import {Container, TextInput, IconButton, Line, Content, TextsContainer, ErrorText, LengthText} from './styled';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Dimensions} from 'react-native'
const heightScreen = Dimensions.get("screen").height
const widthScreen = Dimensions.get("screen").width
export default Input = ({
    width = widthScreen*0.85,
    height= 40,
    placeHolder,
    setValue, 
    value, 
    canTextHide = false,
    isCorrect = false, 
    errorText = 'Error text',
    keyboardType,
    numberOfLines = 1,
    multiline = false,
    maxLength = -1
}) => {
    const [secureTextEntry, setSecureTextEntry] = React.useState(canTextHide);
    const [hasBeenFocused, setHasBeenFocused] = React.useState(false);

    return (
        <Container
            width={width} 
            height= {height}
        >
            <Content>
                <TextInput 
                    placeholder={placeHolder}
                    onChangeText={(text) => setValue(text.trim())}
                    defaultText={value}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    onFocus={() => setHasBeenFocused(false)}
                    numberOfLines={numberOfLines}
                    multiline={multiline}
                    onEndEditing={() => setHasBeenFocused(true)}
                    maxLength={maxLength === -1 ? value.length + 2 : maxLength}
                    autoCapitalize="none"
                />
                <IconButton 
                    isVisible={canTextHide}
                    onPress={() => setSecureTextEntry(!secureTextEntry)}
                >
                    <MaterialCommunityIcons name={secureTextEntry ? "eye" : "eye-off-outline"} color="#ffc500" size={30}/>
                </IconButton>
                <Line width={width} isCorrect={isCorrect} hasBeenFocused={hasBeenFocused}/>
            </Content>
            <TextsContainer
                width={width}
            >
                <LengthText
                    maxLength={maxLength}
                    hasBeenFocused={hasBeenFocused}
                    currentValueLength={value.length}
                >
                    {maxLength - value.length} caracteres restantes
                </LengthText>
                <ErrorText
                    isCorrect={isCorrect}
                    hasBeenFocused={hasBeenFocused}
                >
                    {errorText}
                </ErrorText>
            </TextsContainer>

        </Container>
    )
}