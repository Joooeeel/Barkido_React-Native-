import React from 'react';
import {Container} from './styled';

export default (props) => {

    // const [size, setSize] = useState({width:0, height:0});
    return (
        <Container 
            isActive={props.isActive} 
            x={props.x} y={props.y} 
            parentWidth={props.parentWidth} parentHeight={props.parentHeight} 
        >
            
            {props.children}

        </Container>
    )
}