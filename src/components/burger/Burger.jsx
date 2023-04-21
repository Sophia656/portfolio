import React, { useState } from 'react';
import { DARK } from '../../colors';
import { BurgerItem, BurgerItemBottom, BurgerItemTitle, BurgerItemTop, BurgerMenu, BurgerWrapper, Content, ContentBlock, ContentItem, Wrapper } from './styled';
import contacts from '../../images/web/contacts_page.jpg';
import doc from '../../images/web/documental_page.jpg';
import hasard from '../../images/web/hasard_page.jpg';

const Burger = ({currentPage, setCurrentPage}) => {
    const [active, setActive] = useState(false)
    const [showSeries, setShowSeries] = useState(false)

    return (
    <Wrapper>
        <BurgerWrapper  onClick={() => setActive(!active)} onMouseEnter={() => setShowSeries(false)}>
            <BurgerItemTop dotback={currentPage === 5 ? DARK : ''} active={active} />
            <BurgerItemBottom dotback={currentPage === 5 ? DARK : ''} active={active} />
        </BurgerWrapper>
        {/* <Content active={active}>
            <ContentBlock>
                <ContentItem active={active} onMouseEnter={() => {setShowSeries(false)}} onClick={() => {setCurrentPage(1); setActive(false)}} to='/overview'>overview</ContentItem>
                <ContentItem
                active={active}
                onMouseEnter={() => setShowSeries(true)}
                seriesActive={showSeries}
                >
                    series
                </ContentItem>
                <ContentItem active={active} onMouseEnter={() => setShowSeries(false)} onClick={() => {setCurrentPage(5); setActive(false)}} to='/contacts'>contacts</ContentItem>
            </ContentBlock>
            <ContentBlock active={showSeries}>
                <ContentItem active={showSeries} onMouseEnter={() => setShowSeries(true)} onClick={() => {setCurrentPage(2); setActive(false)}} to='/hasardobjective'>hasard objectif</ContentItem>
                <ContentItem active={showSeries} onMouseEnter={() => setShowSeries(true)} onClick={() => {setCurrentPage(3); setActive(false)}} to='/documental'>documental</ContentItem>
                <ContentItem active={showSeries} onMouseEnter={() => setShowSeries(true)} onClick={() => {setCurrentPage(4); setActive(false)}} to='/personalities'>personalities</ContentItem>
            </ContentBlock>
        </Content> */}

        <BurgerMenu  active={active}>
            <BurgerItem backimg={`url(${doc})`}>
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
            <BurgerItem backimg={`url(${doc})`}>
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