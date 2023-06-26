import React, { useState, useRef, useEffect } from 'react';
import Copyright from '../copyright/Copyright';
import { ImageDescription, ImageItem, ImageWrapper, ImgLoaderWrapper } from './styled';
import { useContext } from 'react';
import { PagesContext } from '../../context/context';

const MyImage = ({link, desc, date, w, hw, ml, cr_year, cr_mt, mt, rus}) => {
    const { openCurrentImg, setOpenCurrentImg } = useContext(PagesContext)


    const [showCr, setShowCr] = useState(false)
    const [showDescription, setShowDescription] = useState(false)
    const onHandleRightClick = (e) => {
        e.preventDefault()
        setShowCr(true)
        setTimeout(() => {
            setShowCr(false)
        }, 1500);
    }

    const [loaded, setLoaded] = useState(false)
    const ref = useRef()

    const onLoad = () => {
        setLoaded(true)
    }

    useEffect(() => {
        if (ref.current && ref.current.complete) {
        onLoad()
        }
    })

    return (
        <ImageWrapper>
             {/* принимает mt + year */}
            {showCr && <Copyright mt={cr_mt} year={cr_year}  />}
            <ImageItem
            onLoad={onLoad}
            onClick={() => setOpenCurrentImg(!openCurrentImg)}
            onContextMenu={onHandleRightClick} 
            onMouseEnter={() => setShowDescription(true)}
            onMouseLeave={() => setShowDescription(false)}
            mt={mt}
            w={w}
            hw={hw}
            ml={showDescription && {ml}}
            src={link} 
            alt='#' 
            />
            {!loaded && <ImgLoaderWrapper></ImgLoaderWrapper>}
            <ImageDescription rus={rus} showdesc={showDescription}>{desc}<br/>{cr_year}</ImageDescription>
        </ImageWrapper>
    );
};

export default MyImage;