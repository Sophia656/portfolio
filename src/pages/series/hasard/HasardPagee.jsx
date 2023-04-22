import React from 'react';
import MyImage from '../../../components/UI/image/MyImage';
import { ImageLineWrapper, PhotosLine, Title, Wrapper } from './styled';

const HasardPagee = () => {

    return (
        <Wrapper>
            <Title>HASARD OBJECTIF</Title>
            <PhotosLine>
                    <ImageLineWrapper>
                        <MyImage
                        link={require('../../../images/web/hasard/3.jpg')}
                        desc='"Two reclining girls"'
                        date="June, '21"
                        w='42vw'
                        hw='54vw'
                        ml='3vw'
                        cr_year='2021'
                        cr_mt='10vh'
                        />
                        <MyImage
                        link={require('../../../images/web/hasard/2.jpg')}
                        desc='"Twist"'
                        date="June, '21"
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2021'
                        cr_mt='10vh'
                        />
                    </ImageLineWrapper>
                    <ImageLineWrapper>
                        <MyImage
                        link={require('../../../images/web/hasard/7.jpg')}
                        desc='"Indifferentism"'
                        date="July, '21"
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2021'
                        cr_mt='10vh'
                        />
                        <MyImage
                        link={require('../../../images/web/hasard/8.jpg')}
                        desc='"On the hook"'
                        date="July, '21"
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2021'
                        cr_mt='10vh'
                        />
                    </ImageLineWrapper>
                    <ImageLineWrapper>
                        <MyImage
                        link={require('../../../images/web/hasard/6.jpg')}
                        desc='Untitled'
                        date="August, '22"
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2022'
                        cr_mt='10vh'
                        />
                        <MyImage
                        link={require('../../../images/web/hasard/14.jpg')}
                        desc='"Sleeping nude from the back"'
                        date="July, '21"
                        w='42vw'
                        hw='54vw'
                        ml='3vw'
                        cr_year='2021'
                        cr_mt='10vh'
                        />
                    </ImageLineWrapper>
                </PhotosLine>
        </Wrapper>
    );
};

export default HasardPagee;