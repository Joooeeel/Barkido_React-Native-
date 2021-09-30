import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const viewWidth = 220;
const marginTop = 10;
const minWidth = 0;

export const Container = styled.View`
    width: ${viewWidth+'px'};
    border-radius: 10px;
    background-color: white;
    align-items: center;
   
    
    position: ${(props)=> props.isActive === true ? 'absolute' : 'relative'};
    top: ${(props) => props.y + props.parentHeight + marginTop+'px'};
    left: ${(props)=> {
        const toLeft = props.x - viewWidth + props.parentWidth;
        const toRight= props.x;
        
        let currentPos = toLeft;
        if (currentPos<minWidth) currentPos = toRight;

        return currentPos+'px';
    }};
    
    display: ${(props) => props.isActive === true ? 'flex' : 'none'};
`