import React from 'react';
import {Modal, StyleSheet} from 'react-native';
import {Container, DarkView, LightView} from './styled';

export default ({isActive, children}) =>{
    return(
        <Container>
            <Modal transparent={true} visible={isActive} animationType='fade' >
                
                <DarkView>
                    <LightView style={styles.shadowContainer}>
                        {children}
                    </LightView>
                </DarkView>
            </Modal>
        </Container>
    )
}

const styles = StyleSheet.create({
    shadowContainer: {
        elevation: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
});