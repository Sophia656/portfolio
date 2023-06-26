import React, { useState, useRef, useEffect } from 'react';
import Copyright from '../copyright/Copyright';
import { ImageDescription, ImageItem, ImageWrapper, ImgLoaderWrapper } from './styled';

const MyImage = ({link, desc, w, hw, ml, cr_year, mt, rus}) => {
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
            {showCr && <Copyright year={cr_year}  />}
            <ImageItem
            onLoad={onLoad}
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