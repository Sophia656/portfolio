import React, { useEffect, useState } from 'react';
import arrow from '../../../assets/arrow.png';
import { Image } from './styled';

const Button = ({rotate, r, l, b, handleClick}) => {
    const [vis, setVis] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setVis(true)
        }, 8700);
    }, [])
    
    return (
        <Image onClick={handleClick} src={arrow} rotate={rotate} r={r} l={l} b={b} visible={vis} />
    );
};

export default Button;