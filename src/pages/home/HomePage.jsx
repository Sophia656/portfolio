import React, { useContext, useEffect, useRef, useState } from 'react';
import { PagesContext } from '../../components/context/context';
import Title from '../../components/title/Title';
import { Wrapper } from './styled';

const HomePage = () => {
    const [showCursor, setShowCursor] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShowCursor(true)
        }, 7000);
    }, [])

    return (
        <Wrapper cursor={showCursor}>
            <Title cursor={showCursor} />
        </Wrapper>
    );
};

export default HomePage;