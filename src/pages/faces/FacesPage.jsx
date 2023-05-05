import React, { useContext } from 'react';
import { PagesContext } from '../../components/context/context';
import Modal from '../../components/modal/Modal';
import MyImage from '../../components/UI/image/MyImage';
import { ImageLineWrapper, PhotosLine, Title, Wrapper } from './styled';

const FacesPage = () => {
    const { openModal } = useContext(PagesContext)

    return (
        <Wrapper>
            {openModal && <Modal />}
            <Title>PERSONALITIES</Title>
            <PhotosLine>
                    <ImageLineWrapper>
                        <MyImage
                        link={require('../../images/web/personal/1.jpg')}
                        w='25vw'
                        hw='30vw'
                        ml='3vw'
                        cr_year='2022'
                        cr_mt='10vh'
                        />
                        <MyImage
                        link={require('../../images/web/personal/2.jpg')}
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2021'
                        cr_mt='10vh'
                        />
                    </ImageLineWrapper>
                    <ImageLineWrapper>
                        <MyImage
                        link={require('../../images/web/personal/3.jpg')}
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2022'
                        cr_mt='10vh'
                        />
                        <MyImage
                        link={require('../../images/web/personal/4.jpg')}
                        w='42vw'
                        hw='54vw'
                        ml='3vw'
                        cr_year='2022'
                        cr_mt='10vh'
                        />
                    </ImageLineWrapper>
                    <ImageLineWrapper>
                    <MyImage
                        link={require('../../images/web/personal/10.jpg')}
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2022'
                        cr_mt='10vh'
                        />
                        <MyImage
                        link={require('../../images/web/personal/7.jpg')}
                        w='42vw'
                        hw='54vw'
                        ml='3vw'
                        cr_year='2022'
                        cr_mt='10vh'
                        />
                        {/* <MyImage
                        link={require('../../images/web/personal/10.jpg')}
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2022'
                        cr_mt='10vh'
                        /> */}
                    </ImageLineWrapper>
                </PhotosLine>
        </Wrapper>
    );
};

export default FacesPage;