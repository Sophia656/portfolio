import React, { useState } from 'react';
import Copyright from '../copyright/Copyright';
import { ImageDescription, ImageItem, ImageWrapper } from './styled';

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
    return (
        <ImageWrapper>
             {/* принимает mt + year */}
            {showCr && <Copyright mt={cr_mt} year={cr_year}  />}
            <ImageItem
            onContextMenu={onHandleRightClick} 
            onMouseEnter={() => setShowDescription(true)}
            onMouseLeave={() => setShowDescription(false)}
            w={w}
            hw={hw}
            ml={showDescription && {ml}}
            src={link} alt='#' />
            <ImageDescription showdesc={showDescription}>{desc}<br/>{date}</ImageDescription>
        </ImageWrapper>
    );
};

export default MyImage;