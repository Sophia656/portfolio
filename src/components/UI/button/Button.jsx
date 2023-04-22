import React, { useEffect, useState } from 'react';
import arrow from '../../../assets/arrow.png';
import { Image } from './styled';

const Button = ({rotate, r, l, b, handleClick, currentPage}) => {
    const [vis, setVis] = useState(false)

    useEffect(() => {
        if (currentPage === 0) {
            setTimeout(() => {
                setVis(true)
            }, 8700)
        } else {
            setVis(true)
        }
        
    }, [currentPage])
    
    return (
        <Image onClick={handleClick} src={arrow} rotate={rotate} r={r} l={l} b={b} visible={vis} />
    );
};

export default Button;