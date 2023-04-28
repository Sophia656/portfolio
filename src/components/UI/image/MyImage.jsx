import React, { useState, useRef, useEffect } from 'react';
import Copyright from '../copyright/Copyright';
import { ImageDescription, ImageItem, ImageWrapper, ImgLoader, ImgLoaderWrapper } from './styled';

const MyImage = ({link, desc, date, w, hw, ml, cr_year, cr_mt}) => {
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
            ref={ref} onLoad={onLoad}
            onContextMenu={onHandleRightClick} 
            onMouseEnter={() => setShowDescription(true)}
            onMouseLeave={() => setShowDescription(false)}
            w={w}
            hw={hw}
            ml={showDescription && {ml}}
            src={link} alt='#' />
            {!loaded && <ImgLoaderWrapper></ImgLoaderWrapper>}
            <ImageDescription showdesc={showDescription}>{desc}<br/>{date}</ImageDescription>
        </ImageWrapper>
    );
};

export default MyImage;