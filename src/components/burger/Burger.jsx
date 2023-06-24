import React, { useState } from 'react';
import { DARK } from '../../colors';
import { BurgerItem, BurgerItemBottom, BurgerItemTitle, BurgerItemTop, BurgerMenu, BurgerWrapper, Wrapper } from './styled';
import contacts from '../../images/web/contacts_page2.jpg';
import doc from '../../images/web/documental_page2.jpg';
import hasard from '../../images/web/hasard_page2.jpg';
import personal from '../../images/web/personal_page2.jpg';
import overview from '../../images/web/overview_page4.jpg';
import { useEffect } from 'react';
import { useContext } from 'react';
import { PagesContext } from '../context/context';

const Burger = ({currentPage, setCurrentPage}) => {
    const [active, setActive] = useState(false)
    const [showSeries, setShowSeries] = useState(false)
    const [changeDots, setChangeDots] = useState(false)
    const { rus } = useContext(PagesContext)

    useEffect(() => {
        if (currentPage === 5) {
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
                rus={rus}
                >
                    {rus ? 'ОБЩИЙ ОБЗОР' : 'OVERVIEW'}
                </BurgerItemTitle>
            </BurgerItem>
            <BurgerItem backimg={`url(${hasard})`}>
                <BurgerItemTitle
                 active={showSeries} 
                 onMouseEnter={() => setShowSeries(true)} 
                 onClick={() => {setCurrentPage(2); setActive(false)}} 
                 to='/hasardobjective'
                 rus={rus}
                 >
                    {rus
                ?
                'ОБЪЕКТИВНАЯ РЕАЛЬНОСТЬ'
                :
                'HASARD OBJECTIF'
                }
                 </BurgerItemTitle>
            </BurgerItem>
            <BurgerItem backimg={`url(${doc})`}>
                <BurgerItemTitle
                 active={showSeries} 
                 onMouseEnter={() => setShowSeries(true)} 
                 onClick={() => {setCurrentPage(3); setActive(false)}} 
                 to='/documental'
                 rus={rus}
                 >
                    {rus ? 'ДОКУМЕНТАЛЬНАЯ ФОТОГРАФИЯ' : 'DOCUMENTARY PHOTOGRAPHY'}
                 </BurgerItemTitle>
            </BurgerItem>
            <BurgerItem backimg={`url(${personal})`}>
                <BurgerItemTitle
                 active={showSeries} 
                 onMouseEnter={() => setShowSeries(true)} 
                 onClick={() => {setCurrentPage(4); setActive(false)}} 
                 to='/personalities'
                 rus={rus}
                 >
                    {rus ? 'ПЕРСОНАЛЬНЫЕ РАБОТЫ' : 'PERSONALITIES'}
                 </BurgerItemTitle>
            </BurgerItem>
            <BurgerItem backimg={`url(${contacts})`}>
                <BurgerItemTitle
                 active={active} 
                 onMouseEnter={() => setShowSeries(false)} 
                 onClick={() => {setCurrentPage(5); setActive(false)}} 
                 to='/contacts'
                 rus={rus}
                 col='black'
                 border='1px solid black'
                 >
                    {rus ? 'КОНТАКТЫ' : 'CONTACTS'}
                </BurgerItemTitle>
            </BurgerItem>
        </BurgerMenu>
    </Wrapper>
    );
};

export default Burger;