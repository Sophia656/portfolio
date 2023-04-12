import React, { cloneElement, useContext, useEffect } from 'react';
import { useState } from 'react';
import { PagesContext } from '../context/context';
import Button from '../UI/button/Button';
import { Page, Wrapper } from './styled';
import Burger from '../burger/Burger';
import { paths } from '../../route';
import { useRef } from 'react';

const Magazine = ({children}) => {
    const { navigate, location, baseHeight, setBaseHeight } = useContext(PagesContext);
    const disabledPageWidth = '0vw';
    const showPageWidth = '100vw'
    const [pages, setPages] = useState([])
    const [showBurger, setShowBurger] = useState(false)
    const [currentPage, setCurrentPage] = useState(0)
    
    useEffect(() => {
        const result = []
        const pagesCounter = 7

        for (let i = 0; i < pagesCounter; i++) {
            result.push({...children.props.children[i].props.element, key: i})
        }

        setPages(result.map((i, key) => {
            if (key === 2) {
                return cloneElement(i, {
                    helpers: {
                        id: key,
                        show: key === 0 ? true : false,
                    },
                    style: {
                        height: '300vh',
                    },
                })
            }
            if (key === 3) {
                return cloneElement(i, {
                    helpers: {
                        id: key,
                        show: key === 0 ? true : false,
                    },
                    style: {
                        height: '200vh',
                    },
                })
            } else {
                return cloneElement(i, {
                    helpers: {
                        id: key,
                        show: key === 0 ? true : false,
                    },
                    style: {
                        height: '100vh',
                    },
                })
            }
            // return cloneElement(i, {
            //     helpers: {
            //         id: key,
            //         show: key === 0 ? true : false,
            //     },
            //     style: {
            //         height: '100vh',
            //     },
            // })
        }))
    }, [])

    const handleRight = () => {
        const currNum = pages.find(p => p.props.helpers.show === true)

        const newarr = pages.map(p => {
            // console.log('p.current.getBoundingClientRect().height', currentPageRef.current.getBoundingClientRect().height)
            if (p.props.helpers.id === currNum.props.helpers.id && p.props.helpers.id === pages.length){
                return p
            }
            if (p.props.helpers.id === currNum.props.helpers.id) {
                p.props.helpers.show = !p.props.helpers.show
                return p
            }
            if (p.props.helpers.id === (currNum.props.helpers.id + 1)) {
                p.props.helpers.show = !p.props.helpers.show
                return p
            }
            else {
                return p
            }
        })

        if (currentPage === pages.length - 1) {
            setCurrentPage(pages.length - 1)
        } else {
            setCurrentPage(currentPage => currentPage + 1)
        }

        setPages(newarr)
    }

    const handleLeft = () => {
        const currNum = pages.find(p => p.props.helpers.show === true)

        const newarr = pages.map(p => {
            if (p.props.helpers.id === currNum.props.helpers.id && p.props.helpers.id === 0){
                return p
            }
            if (p.props.helpers.id === currNum.props.helpers.id) {
                p.props.helpers.show = !p.props.helpers.show
                return p
            }
            if (p.props.helpers.id === (currNum.props.helpers.id - 1)) {
                p.props.helpers.show = !p.props.helpers.show
                return p
            }
            else {
                return p
            }
        })

        if (currentPage === 0) {
            setCurrentPage(0)
        } else {
            setCurrentPage(currentPage => currentPage - 1)
        }

        setPages(newarr)
    }

    useEffect(() => {
        setTimeout(() => {
            setShowBurger(true)
        }, 8700);
    }, [])

    useEffect(() => {
        if (currentPage === 0) {
            navigate(paths[0]) // home
        }
        if (currentPage === 1) {
            navigate(paths[1]) // overview
            setPages(pages.map(p => {
                if (p.props.helpers.id === currentPage) {
                    p.props.helpers.show = true
                    return p
                } else {
                    p.props.helpers.show = false
                    return p 
                }
            }))
        }
        if (currentPage === 2) {
            navigate(paths[2]) // hasard
            setPages(pages.map(p => {
                if (p.props.helpers.id === currentPage) {
                    p.props.helpers.show = true
                    return p
                } else {
                    p.props.helpers.show = false
                    return p 
                }
            }))
        }
        if (currentPage === 3) {
            navigate(paths[3]) // documental
            setPages(pages.map(p => {
                if (p.props.helpers.id === currentPage) {
                    p.props.helpers.show = true
                    return p
                } else {
                    p.props.helpers.show = false
                    return p 
                }
            }))
        }
        if (currentPage === 4) {
            navigate(paths[4]) // person
            setPages(pages.map(p => {
                if (p.props.helpers.id === currentPage) {
                    p.props.helpers.show = true
                    return p
                } else {
                    p.props.helpers.show = false
                    return p 
                }
            }))
        }
        if (currentPage === 5) {
            navigate(paths[5]) // contacts
            setPages(pages.map(p => {
                if (p.props.helpers.id === currentPage) {
                    p.props.helpers.show = true
                    return p
                } else {
                    p.props.helpers.show = false
                    return p 
                }
            }))
        }
        
    }, [currentPage])

    return (
        <Wrapper h={pages.map(p => { // и тут
            if (p.props.helpers.show === true) {
                return p.props.style.height
            }
        })}>
            {showBurger && <Burger currentPage={currentPage} setCurrentPage={setCurrentPage} />}
            {currentPage !== 0 && <Button rotate='-90deg' l='0' handleClick={() => handleLeft()}/>}
                {pages.map(page =>
                    <Page 
                    key={page.props.helpers.id} 
                    w={page.props.helpers.show === true ? showPageWidth : disabledPageWidth}
                    h={page.props.style.height}
                    back={page.props.helpers.show === true && '#cabdb062'}
                    >
                        {page}
                    </Page>
                )}
            {currentPage !== 5 && <Button rotate='90deg' r='0' handleClick={() => handleRight()}/>}
        </Wrapper>
    );
};

export default Magazine;

//  show={pages[0].props.show === true && 'none'}