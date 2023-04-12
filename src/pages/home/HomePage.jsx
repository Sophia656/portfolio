import React, { useContext, useEffect, useRef, useState } from 'react';
import { PagesContext } from '../../components/context/context';
import Title from '../../components/title/Title';
import { Wrapper } from './styled';

const HomePage = () => {

    return (
        <Wrapper>
            <Title />
        </Wrapper>
    );
};

export default HomePage;