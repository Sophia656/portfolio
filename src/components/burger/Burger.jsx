import React, { useState } from 'react';
import { DARK } from '../../colors';
import { BurgerItemBottom, BurgerItemTop, BurgerWrapper, Content, ContentBlock, ContentItem, Wrapper } from './styled';

const Burger = ({currentPage, setCurrentPage}) => {
    const [active, setActive] = useState(false)
    const [showSeries, setShowSeries] = useState(false)

    return (
    <Wrapper>
        <BurgerWrapper  onClick={() => setActive(!active)} onMouseEnter={() => setShowSeries(false)}>
            <BurgerItemTop dotback={currentPage === 5 ? DARK : ''} active={active} />
            <BurgerItemBottom dotback={currentPage === 5 ? DARK : ''} active={active} />
        </BurgerWrapper>
        <Content active={active}>
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
        </Content>
    </Wrapper>
    );
};

export default Burger;