import styled from 'styled-components/native';

export const Container = styled.View`
    width: ${({width}) => width + 'px'};
    margin-bottom: 20px;
`

export const Content = styled.View`
    height: 40px;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;
`
export const TextInput = styled.TextInput`
    font-size: 15px;
    flex: 1;
`
export const IconButton = styled.TouchableOpacity`
    display: ${({isVisible}) => isVisible ? 'flex' : 'none'};
`
export const Line = styled.View`
    position: absolute;
    bottom: 0px;
    width: ${({width}) => width + 'px'};
    height: ${({isCorrect, hasBeenFocused}) => isCorrect ? hasBeenFocused ? '2px' : '1px' : hasBeenFocused ? '2px' : '1px'};
    background-color: ${({isCorrect, hasBeenFocused}) => isCorrect ? hasBeenFocused ? '#abd7e3' : 'lightgrey' : hasBeenFocused ? '#ffc500' : 'lightgrey'};
`
export const TextsContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: ${({width}) => width + 'px'};
    margin-top: 2px;
`

export const LengthText = styled.Text`
    color: ${({maxLength, hasBeenFocused, currentValueLength}) => maxLength === -1 || currentValueLength === 0 ? 'transparent' : !hasBeenFocused ? 'gray' : 'transparent'};
    font-size: 12px;
`

export const ErrorText = styled.Text`
    color: ${({isCorrect, hasBeenFocused}) => isCorrect ? 'transparent' : hasBeenFocused ? '#ffc500' : 'transparent'};
    align-self: flex-end;
    text-align: right;
`