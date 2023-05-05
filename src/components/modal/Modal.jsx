import React, { useContext } from 'react';
import { PagesContext } from '../context/context';
import MyImage from '../UI/image/MyImage';
import { ClosingCross, ClosingCrossWrap, Wrapper } from './styled';

const Modal = () => {
    const { openModal, setOpenModal, modalSrc, modalCrYear } = useContext(PagesContext)

    const handleClickClose = () => {
        setOpenModal(false)
    }

    return (
        <Wrapper open={openModal} onClick={() => handleClickClose()}>
            <ClosingCrossWrap><ClosingCross>-</ClosingCross></ClosingCrossWrap>
            
            <MyImage
            cr_year={modalCrYear}
            link={modalSrc.current.src}
            mt='5vh' 
            w={modalSrc.current.clientHeight > modalSrc.current.clientWidth ? '40vw' : '65vw'} 
            hw={modalSrc.current.clientHeight > modalSrc.current.clientWidth ? '40vw' : '65vw'} />
        </Wrapper>
    );
};

export default Modal;