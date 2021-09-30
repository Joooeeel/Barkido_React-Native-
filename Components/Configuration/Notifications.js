import React,{useState} from 'react';
import {StyleSheet, Text, View} from 'react-native'
import Limit from '../TopLimitScreen'
import GoBack from './GoBack'
import {Container, Title, Body, ViewTitle} from './styled'
import FlipToggle from 'react-native-flip-toggle-button'

export default (props)=>{
    const [isVibrationActive, setVibrationActive] = useState(true);
    const [isSoundActive, setSoundActive] = useState(true);
    return (
        <Container>
            <Limit/>
            <GoBack navigation={props.navigation} />
            <ViewTitle><Title>Notificaciones</Title></ViewTitle>
            <Body style={{alignItems: "flex-start"}}>
                <View style={styles.rowView}>
                    <Text>Vibración</Text>
                    <FlipToggle
                        value={isVibrationActive}
                        buttonWidth={50}
                        buttonHeight={17}
                        buttonRadius={50}
                        sliderWidth={30}
                        sliderHeight={30}
                        sliderRadius={50}
                        sliderOnColor={'#ffc500'}
                        sliderOffColor={'#abd7e3'}
                        // onLabel={'On'}
                        // offLabel={'Off'}
                        // labelStyle={{ color: 'red' }}
                        buttonOnColor={'#dba628'}
                        buttonOffColor={'#717070'}
                        //this.state.isActive
                        onToggle={(newState) => setVibrationActive(newState)}
                        onToggleLongPress={() => console.log('toggle long pressed!')}
                    />
                </View>
                <View style={styles.rowView}>
                    <Text>Sonido</Text>
                    <FlipToggle
                        value={isSoundActive}
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
                        onToggle={(newState) => setSoundActive(newState)}
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