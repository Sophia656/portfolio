import React, { useState } from 'react';
import { DARK } from '../../colors';
import { BurgerItem, BurgerItemBottom, BurgerItemTitle, BurgerItemTop, BurgerMenu, BurgerWrapper, Wrapper } from './styled';
import contacts from '../../images/web/contacts_page2.jpg';
import doc from '../../images/web/documental_page2.jpg';
import hasard from '../../images/web/hasard_page2.jpg';
import personal from '../../images/web/personal_page2.jpg';
import overview from '../../images/web/overview_page3.jpg';
import { useEffect } from 'react';

const Burger = ({currentPage, setCurrentPage}) => {
    const [active, setActive] = useState(false)
    const [showSeries, setShowSeries] = useState(false)
    const [changeDots, setChangeDots] = useState(false)

    useEffect(() => {
        if (currentPage === 1) {
            setChangeDots(true)
        } else if (currentPage === 5) {
            setChangeDots(true)
        } else {
            setChangeDots(false)
        }
    }, [currentPage])

    return (
    <Wrapper>
        <BurgerWrapper  onClick={() => setActive(!active)} onMouseEnter={() => setShowSeries(false)}>
            <BurgerItemTop dotback={changeDots ? DARK : ''} active={active} />
            <BurgerItemBottom dotback={changeDots ? DARK : ''} active={active} />
        </BurgerWrapper>
        <BurgerMenu  active={active}>
            <BurgerItem backimg={`url(${overview})`}>
                <BurgerItemTitle 
                active={active} 
                onMouseEnter={() => {setShowSeries(false)}} 
                onClick={() => {setCurrentPage(1); setActive(false)}} 
                to='/overview'
                >
                    OVERVIEW
                </BurgerItemTitle>
            </BurgerItem>
            <BurgerItem backimg={`url(${hasard})`}>
                <BurgerItemTitle
                 active={showSeries} 
                 onMouseEnter={() => setShowSeries(true)} 
                 onClick={() => {setCurrentPage(2); setActive(false)}} 
                 to='/hasardobjective'
                 >
                    HASARD OBJECTIF
                 </BurgerItemTitle>
            </BurgerItem>
            <BurgerItem backimg={`url(${doc})`}>
                <BurgerItemTitle
                 active={showSeries} 
                 onMouseEnter={() => setShowSeries(true)} 
                 onClick={() => {setCurrentPage(3); setActive(false)}} 
                 to='/documental'
                 >
                    DOCUMENTAL
                 </BurgerItemTitle>
            </BurgerItem>
            <BurgerItem backimg={`url(${personal})`}>
                <BurgerItemTitle
                 active={showSeries} 
                 onMouseEnter={() => setShowSeries(true)} 
                 onClick={() => {setCurrentPage(4); setActive(false)}} 
                 to='/personalities'
                 >
                    PERSONALITIES
                 </BurgerItemTitle>
            </BurgerItem>
            <BurgerItem backimg={`url(${contacts})`}>
                <BurgerItemTitle
                 active={active} 
                 onMouseEnter={() => setShowSeries(false)} 
                 onClick={() => {setCurrentPage(5); setActive(false)}} 
                 to='/contacts'
                 >
                    CONTACTS
                </BurgerItemTitle>
            </BurgerItem>
        </BurgerMenu>
    </Wrapper>
    );
};

export default Burger;