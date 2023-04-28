import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { PagesContext } from '../../components/context/context';
import Modal from '../../components/modal/Modal';
import MyImage from '../../components/UI/image/MyImage';
import { ImageLineWrapper, PhotosLine, Title, Wrapper } from './styled';

const OverviewPage = () => {
    const { openModal, setOpenModal } = useContext(PagesContext);

    const handleClickOpen = () => {
        setOpenModal(!openModal)
        console.log('op', openModal)
    }

    const handleClickClose = () => {
        setOpenModal(!openModal)
        console.log('cl', openModal)
    }

    // console.log(openModal)
    return (
        <Wrapper>
            {openModal && <Modal click={() => handleClickClose()} />}
            <Title>OVERVIEW</Title>
            <PhotosLine>
                <ImageLineWrapper mt='5vh'>
                    <MyImage
                    link={require('../../images/web/overview/52.jpg')}
                    w='25vw'
                    hw='30vw'
                    ml=''
                    cr_year='2023'
                    cr_mt='15vh'
                    onClick={() => handleClickOpen()}
                    />
                    <MyImage
                    link={require('../../images/web/overview/2.jpg')}
                    w='20vw'
                    hw='35vw'
                    ml=''
                    cr_year='2022'
                    cr_mt='15vh'
                    />
                    <MyImage
                    link={require('../../images/web/overview/18.jpg')}
                    w='25vw'
                    hw='30vw'
                    ml=''
                    cr_year='2023'
                    cr_mt='15vh'
                    />
                </ImageLineWrapper>
                <ImageLineWrapper>
                    <MyImage
                    link={require('../../images/web/overview/34.jpg')}
                    w='23vw'
                    hw='30vw'
                    ml=''
                    cr_year='2021'
                    cr_mt='15vh'
                    />
                    <MyImage
                    link={require('../../images/web/overview/46.jpg')}
                    w='30vw'
                    hw='35vw'
                    ml=''
                    cr_year='2021'
                    cr_mt='15vh'
                    />
                    <MyImage
                    link={require('../../images/web/overview/5.jpg')}
                    w='23vw'
                    hw='30vw'
                    ml=''
                    cr_year='2022'
                    cr_mt='15vh'
                    />
                </ImageLineWrapper>
                <ImageLineWrapper>
                    <MyImage
                    link={require('../../images/web/overview/38.jpg')}
                    w='25vw'
                    hw='30vw'
                    ml=''
                    cr_year='2021'
                    cr_mt='15vh'
                    />
                    <MyImage
                    link={require('../../images/web/overview/51.jpg')}
                    w='20vw'
                    hw='40vw'
                    ml=''
                    cr_year='2022'
                    cr_mt='15vh'
                    />
                    <MyImage
                    link={require('../../images/web/overview/41.jpg')}
                    w='25vw'
                    hw='30vw'
                    ml=''
                    cr_year='2021'
                    cr_mt='15vh'
                    />
                </ImageLineWrapper>
                <ImageLineWrapper>
                    <MyImage
                    link={require('../../images/web/overview/9.jpg')}
                    w='22vw'
                    hw='35vw'
                    ml=''
                    cr_year='2022'
                    cr_mt='15vh'
                    />
                    <MyImage
                    link={require('../../images/web/overview/12.jpg')}
                    w='30vw'
                    hw='35vw'
                    ml=''
                    cr_year='2021'
                    cr_mt='15vh'
                    />
                    <MyImage
                    link={require('../../images/web/overview/1.jpg')}
                    w='22vw'
                    hw='35vw'
                    ml=''
                    cr_year='2022'
                    cr_mt='15vh'
                    />
                </ImageLineWrapper>
            </PhotosLine>
        </Wrapper>
    );
};

export default OverviewPage;