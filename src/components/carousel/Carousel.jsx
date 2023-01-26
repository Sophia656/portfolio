import React, { Children, cloneElement, useEffect, useState } from 'react';
import Burger from '../burger/Burger';
import Button from '../UI/button/Button';
import { AllItemsContainer, Container, Window } from './styled';
import {Route, Routes, useNavigate, useLocation} from 'react-router-dom';
import { paths, RootRoute } from '../../route';


const PAGE_WIDTH = 100

const Carousel = ({children}) => {
    const navigate = useNavigate()
    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(0)
    const [showBurger, setShowBurger] = useState(false)

    useEffect(() => {
        const result = []
        const pagesCounter = 7

        for (let i = 0; i < pagesCounter; i++) {
            result.push(children.props.children[i].props.element)
        }

        setPages(result.map(i => {
            return cloneElement(i, {
                style: {
                    height: '100%',
                    minWidth: `${PAGE_WIDTH}vw`,
                    maxWidth: `${PAGE_WIDTH}vw`,
                }
            })
        }))
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

    useEffect(() => {
        setTimeout(() => {
            setShowBurger(true)
        }, 8700);
    }, [])

    useEffect(() => {
        if (offset === 0) {
            navigate(paths[0])
        }
        if (offset === -100) {
            navigate(paths[1])
        }
        if (offset === -200) {
            navigate(paths[2])
        }
        if (offset === -300) {
            navigate(paths[3])
        }
        if (offset === -400) {
            navigate(paths[4])
        }
        if (offset === -500) {
            navigate(paths[5])
        }
    }, [offset])

    return (
        <Container>
            {showBurger && <Burger offset={offset} setOffset={setOffset} />}
            {offset !== 0 && <Button offset={offset} handleClick={toLeft} rotate='-90deg' l='0' />}

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
            {offset > -500 && <Button offset={offset} handleClick={toRight} rotate='90deg' r='0' />}
        </Container>
    );
};

export default Carousel;