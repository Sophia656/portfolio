import React, { cloneElement, useCallback, useContext, useEffect } from 'react';
import { useState } from 'react';
import { PagesContext } from '../context/context';
import Button from '../UI/button/Button';
import { Page, Wrapper } from './styled';
import Burger from '../burger/Burger';
import { paths } from '../../route';
import { useRef } from 'react';
import LangBtn from '../UI/language-btn/LangBtn';

const Magazine = ({children}) => {
    const { navigate, testAgeModal, openCurrentImg } = useContext(PagesContext);
    const disabledPageWidth = '0vw';
    const showPageWidth = '100vw'
    const [pages, setPages] = useState([])
    const [showBurger, setShowBurger] = useState(false)
    const [currentPage, setCurrentPage] = useState(0)
    const ref = useRef(null)
    
    useEffect(() => {
        const result = []
        const pagesCounter = 7

        for (let i = 0; i < pagesCounter; i++) {
            result.push({...children.props.children[i].props.element, key: i})
        }

        setPages(result.map((i, key) => {
            if (key === 1) {
                return cloneElement(i, {
                    helpers: {
                        id: key,
                        show: key === 0 ? true : false,
                    },
                    style: {
                        height: '500vh',
                    },
                })
            }
            if (key === 2) {
                return cloneElement(i, {
                    helpers: {
                        id: key,
                        show: key === 0 ? true : false,
                    },
                    style: {
                        height: '800vh',
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
                        height: '700vh',
                    },
                })
            }
            if (key === 4) {
                return cloneElement(i, {
                    helpers: {
                        id: key,
                        show: key === 0 ? true : false,
                    },
                    style: {
                        height: '300vh',
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
        }))
    }, [])

    const handleRight = () => {
        const currNum = pages.find(p => p.props.helpers.show === true)

        const newarr = pages.map(p => {
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

    const handleClick = () => {
        ref.current?.scrollIntoView(0, {behavior: 'smooth'});
    }

    document.onkeydown = checkKey;

    function checkKey(e) {
  
        e = e || window.event;
        if (testAgeModal === false) {

        if (e.keyCode === 37) {
            handleLeft()
            handleClick()
        } else if (e.keyCode === 39) {
            handleRight()
            handleClick()
        }
        }
        // if (e.keyCode === 38) {
        //   setToTheTop(true)
        // }
        // else if (e.keyCode === 40) {
        //   setToTheBottom(true)
        // }

    }

    

    return (
        <Wrapper openImg={openCurrentImg} h={pages.map(p => { // и тут
            if (p.props.helpers.show === true) {
                return p.props.style.height
            }
        })}>
            <LangBtn />
            {(showBurger && testAgeModal === false) && <Burger currentPage={currentPage} setCurrentPage={setCurrentPage} />}
            {(currentPage !== 0 && testAgeModal === false) && <Button rotate='-90deg' l='0' handleClick={() => {handleLeft(); handleClick()}}/>}
                {pages.map(page =>
                    <Page 
                    ref={ref}
                    key={page.props.helpers.id} 
                    w={page.props.helpers.show === true ? showPageWidth : disabledPageWidth}
                    h={page.props.style.height}
                    back={page.props.helpers.show === false && '#cabdb023'}
                    >
                        {page}
                    </Page>
                )}
            {(currentPage !== 5 && testAgeModal === false) && <Button currentPage={currentPage} rotate='90deg' r='0' handleClick={() => {handleRight(); handleClick()}}/>}
        </Wrapper>
    );
};

export default Magazine;