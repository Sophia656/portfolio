import React, { useState } from 'react';
import { DARK } from '../../colors';
import { BurgerItemBottom, BurgerItemTop, BurgerWrapper, Content, ContentBlock, ContentItem, Wrapper } from './styled';

const Burger = ({offset}) => {
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
                <ContentItem active={active} onMouseEnter={() => setShowSeries(false)}>overview</ContentItem>
                <ContentItem
                active={active}
                onMouseEnter={() => setShowSeries(true)}
                seriesActive={showSeries}
                >
                    series
                </ContentItem>
                <ContentItem active={active} onMouseEnter={() => setShowSeries(false)}>contacts</ContentItem>
            </ContentBlock>
            <ContentBlock active={showSeries}>
                <ContentItem active={showSeries} onMouseEnter={() => setShowSeries(true)}>hasard objectif</ContentItem>
                <ContentItem active={showSeries} onMouseEnter={() => setShowSeries(true)}>documental</ContentItem>
                <ContentItem active={showSeries} onMouseEnter={() => setShowSeries(true)}>faces</ContentItem>
            </ContentBlock>
        </Content>
    </Wrapper>
    );
};

export default Burger;