import React from 'react';
import { Btn } from './styled';
import { useContext } from 'react';
import { PagesContext } from '../../context/context';

const LangBtn = () => {
    const {rus, setRus} = useContext(PagesContext)

    const changeLang = () => {
        setRus(!rus)
    }
    return (
        <Btn onClick={() => changeLang()}>
            {rus ? 'en' : 'ru'}
        </Btn>
    );
};

export default LangBtn;