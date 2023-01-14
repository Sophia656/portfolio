import React, { Children, cloneElement, useEffect, useState } from 'react';
import Button from '../UI/button/Button';
import { AllItemsContainer, Container, Window } from './styled';

const PAGE_WIDTH = 100

const Carousel = ({children}) => {
    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${PAGE_WIDTH}vw`,
                        maxWidth: `${PAGE_WIDTH}vw`,
                    }
                })
            })
        )
    }, [])

    const toLeft = () => {
        setOffset((curr) => {
            return Math.min((curr + PAGE_WIDTH), 0)
        })
        
    }

    const toRight = () => {
        setOffset((curr) => {
            const maxP = -(PAGE_WIDTH * (pages.length - 1))
            return Math.max((curr - PAGE_WIDTH), maxP)
        })
    }
    return (
        <Container>
            <Button handleClick={toLeft} rotate='-90deg' l='0' />
            <Window>
                <AllItemsContainer
                style={{
                    transform: `translateX(${offset}vw)`,
                    transitionDuration: '2s',
                    trasitionEasyFunction: 'easy-in',
                }}
                >
                    {pages}
                </AllItemsContainer>
            </Window>
            <Button handleClick={toRight} rotate='90deg' r='0' />
        </Container>
    );
};

export default Carousel;