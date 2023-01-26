import React, { useState } from 'react';
import { DARK } from '../../colors';
import { BurgerItemBottom, BurgerItemTop, BurgerWrapper, Content, ContentBlock, ContentItem, Wrapper } from './styled';

const Burger = ({offset, setOffset}) => {
    const [active, setActive] = useState(false)
    const [showSeries, setShowSeries] = useState(false)

    return (
    <Wrapper>
        <BurgerWrapper  onClick={() => setActive(!active)} onMouseEnter={() => setShowSeries(false)}>
            <BurgerItemTop dotback={offset === -500 ? DARK : ''} active={active} />
            <BurgerItemBottom dotback={offset === -500 ? DARK : ''} active={active} />
        </BurgerWrapper>
        <Content>
            <ContentBlock>
                <ContentItem active={active} onMouseEnter={() => {setShowSeries(false)}} onClick={() => setOffset(-100)} to='/overview'>overview</ContentItem>
                <ContentItem
                active={active}
                onMouseEnter={() => setShowSeries(true)}
                seriesActive={showSeries}
                >
                    series
                </ContentItem>
                <ContentItem active={active} onMouseEnter={() => setShowSeries(false)} onClick={() => setOffset(-500)} to='/contacts'>contacts</ContentItem>
            </ContentBlock>
            <ContentBlock active={showSeries}>
                <ContentItem active={showSeries} onMouseEnter={() => setShowSeries(true)} onClick={() => setOffset(-200)} to='/hasardobjective'>hasard objectif</ContentItem>
                <ContentItem active={showSeries} onMouseEnter={() => setShowSeries(true)} onClick={() => setOffset(-300)} to='/documental'>documental</ContentItem>
                <ContentItem active={showSeries} onMouseEnter={() => setShowSeries(true)} onClick={() => setOffset(-400)} to='/faces'>faces</ContentItem>
            </ContentBlock>
        </Content>
    </Wrapper>
    );
};

export default Burger;