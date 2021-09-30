import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native'
import Limit from '../TopLimitScreen'
import GoBack from './GoBack'
import {Container, Title, Body, ViewTitle} from './styled'
import FlipToggle from 'react-native-flip-toggle-button'

export default (props)=>{

    const [isLocActive, setLocActive] = useState(true);
    const [isPrivateActive, setPrivateActive] = useState(true);

    return (
        <Container>
            <Limit/>
            <GoBack navigation={props.navigation} />
            <ViewTitle><Title>Notificaciones</Title></ViewTitle>
            <Body style={{alignItems: "flex-start"}}>
                <View style={styles.rowView}>
                    <Text>Modo localización</Text>
                    <FlipToggle
                        value={isLocActive}
                        buttonWidth={50}
                        buttonHeight={17}
                        buttonRadius={50}
                        sliderWidth={30}
                        sliderHeight={30}
                        sliderRadius={50}
                        sliderOnColor={'#ffc500'}
                        sliderOffColor={'#abd7e3'}
                        buttonOnColor={'#dba628'}
                        buttonOffColor={'#717070'}
                        onToggle={(newState) => setLocActive(newState)}
                        // onToggleLongPress={() => console.log('toggle long pressed!')}
                    />
                </View>
                <View style={styles.rowView}>
                    <Text>Cuenta Privada</Text>
                    <FlipToggle
                        value={isPrivateActive}
                        buttonWidth={50}
                        buttonHeight={17}
                        buttonRadius={50}
                        sliderWidth={30}
                        sliderHeight={30}
                        sliderRadius={50}
                        sliderOnColor={'#ffc500'}
                        sliderOffColor={'#abd7e3'}
                        buttonOnColor={'#dba628'}
                        buttonOffColor={'#717070'}
                        onToggle={(newState) => setPrivateActive(newState)}
                        onToggleLongPress={() => console.log('toggle long pressed!')}
                    />
                </View>
            </Body>
        </Container>
    )
}



const styles = StyleSheet.create({
    rowView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 25,
        width: '80%',
    }
})