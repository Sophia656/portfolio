import React, { useContext } from 'react';
import { PagesContext } from '../../components/context/context';
import MyImage from '../../components/UI/image/MyImage';
import { ImageLineWrapper, PhotosLine, Title, Wrapper } from './styled';

const FacesPage = () => {
    const { rus } = useContext(PagesContext)

    return (
        <Wrapper>
            <Title rus={rus}>{rus ? 'ПЕРСОНАЛЬНЫЕ РАБОТЫ' : 'PERSONALITIES'}</Title>
            <PhotosLine>
                    <ImageLineWrapper>
                        <MyImage
                        link={require('../../images/web/personal/2.jpg')}
                        w='25vw'
                        hw='30vw'
                        ml='3vw'
                        cr_year='2021'
                        />
                        <MyImage
                        link={require('../../images/web/personal/21.jpg')}
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2021'
                        />
                    </ImageLineWrapper>
                    <ImageLineWrapper>
                        <MyImage
                        link={require('../../images/web/personal/15.jpg')}
                        w='25vw'
                        hw='30vw'
                        ml='3vw'
                        cr_year='2023'
                        />
                        <MyImage
                        link={require('../../images/web/personal/13.jpg')}
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2023'
                        />
                    </ImageLineWrapper>
                    <ImageLineWrapper>
                        <MyImage
                        link={require('../../images/web/personal/22.jpg')}
                        w='42vw'
                        hw='54vw'
                        ml='3vw'
                        cr_year='2022'
                        />
                        <MyImage
                        link={require('../../images/web/personal/9.jpg')}
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2022'
                        />
                    </ImageLineWrapper>
                    <ImageLineWrapper>
                        <MyImage
                        link={require('../../images/web/personal/8.jpg')}
                        w='25vw'
                        hw='30vw'
                        ml='3vw'
                        cr_year='2020'
                        />
                        <MyImage
                        link={require('../../images/web/personal/16.jpg')}
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2020'
                        />
                    </ImageLineWrapper>
                    <ImageLineWrapper>
                        <MyImage
                        link={require('../../images/web/personal/17.jpg')}
                        w='25vw'
                        hw='30vw'
                        ml='3vw'
                        cr_year='2022'
                        />
                        <MyImage
                        link={require('../../images/web/personal/3.jpg')}
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2022'
                        />
                    </ImageLineWrapper>
                    <ImageLineWrapper>
                        <MyImage
                        link={require('../../images/web/personal/18.jpg')}
                        w='25vw'
                        hw='30vw'
                        ml='3vw'
                        cr_year='2023'
                        />
                        <MyImage
                        link={require('../../images/web/personal/28.jpg')}
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2023'
                        />
                    </ImageLineWrapper>
                </PhotosLine>
        </Wrapper>
    );
};

export default FacesPage;