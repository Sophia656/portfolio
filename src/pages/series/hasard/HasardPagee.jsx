import React, { useState } from 'react';
import { Image, ImageDescription, ImageLineWrapper, ImageWrapper, PhotosLine, Title, TitleWrapper, Wrapper } from './styled';

const HasardPagee = () => {
    const [showDescription, setShowDescription] = useState(false)

    return (
        <Wrapper>
            <Title>HASARD OBJECTIF</Title>
            <PhotosLine>
                    <ImageLineWrapper>
                        <ImageWrapper>
                            <Image
                            onMouseEnter={() => setShowDescription(true)}
                            onMouseLeave={() => setShowDescription(false)}
                            w='42vw'
                            hw='54vw'
                            ml={showDescription && '3vw'}
                            src={require('../../../images/web/hasard/3.jpg')} alt='odsjb' />
                            <ImageDescription showdesc={showDescription}>from the Summer vision series<br/>June, '21</ImageDescription>
                        </ImageWrapper>
                        <ImageWrapper>
                            <Image 
                            onMouseEnter={() => setShowDescription(true)} 
                            onMouseLeave={() => setShowDescription(false)} 
                            hw='30vw'
                            ml={showDescription && '-3vw'}
                            src={require('../../../images/web/hasard/2.jpg')} 
                            alt='odsjb' />
                            <ImageDescription showdesc={showDescription}>from the Summer vision series<br/>June, '21</ImageDescription>
                        </ImageWrapper>
                    </ImageLineWrapper>
                    {/* <ImageLineWrapper>
                        <ImageWrapper>
                            <Image 
                            onMouseEnter={() => setShowDescription(true)} 
                            onMouseLeave={() => setShowDescription(false)} 
                            hw='48vw'
                            ml={showDescription && '3vw'}
                            src={require('../../../images/web/documental/15.jpg')} 
                            alt='odsjb' />
                            <ImageDescription showdesc={showDescription}>from the Ballet class series<br/>December, '21</ImageDescription>
                        </ImageWrapper>
                        <ImageWrapper>
                            <Image
                            onMouseEnter={() => setShowDescription(true)}
                            onMouseLeave={() => setShowDescription(false)}
                            w='42vw'
                            hw='54vw'
                            ml={showDescription && '-3vw'}
                            src={require('../../../images/web/hasard/16.jpg')} alt='odsjb' />
                            <ImageDescription showdesc={showDescription}>from the Ballet class series<br/>December, '21</ImageDescription>
                        </ImageWrapper>
                    </ImageLineWrapper> */}
                    {/* <ImageLineWrapper>
                        <ImageWrapper>
                            <Image
                            onMouseEnter={() => setShowDescription(true)}
                            onMouseLeave={() => setShowDescription(false)}
                            w='42vw'
                            hw='54vw'
                            ml={showDescription && '3vw'}
                            src={require('../../../images/web/hasard/52.jpg')} alt='odsjb' />
                            <ImageDescription showdesc={showDescription}>from the Summer vision series<br/>June, '21</ImageDescription>
                        </ImageWrapper>
                        <ImageWrapper>
                            <Image 
                            onMouseEnter={() => setShowDescription(true)} 
                            onMouseLeave={() => setShowDescription(false)} 
                            hw='48vw'
                            ml={showDescription && '-3vw'}
                            src={require('../../../images/web/hasard/45.jpg')} 
                            alt='odsjb' />
                            <ImageDescription showdesc={showDescription}>from the Summer vision series<br/>June, '21</ImageDescription>
                        </ImageWrapper>
                    </ImageLineWrapper> */}
                    {/* <ImageLineWrapper>
                        <ImageWrapper>
                            <Image 
                            onMouseEnter={() => setShowDescription(true)} 
                            onMouseLeave={() => setShowDescription(false)} 
                            hw='48vw'
                            ml={showDescription && '3vw'}
                            src={require('../../../images/web/hasard/26.jpg')} 
                            alt='odsjb' />
                            <ImageDescription showdesc={showDescription}>from the Ballet class series<br/>December, '21</ImageDescription>
                        </ImageWrapper>
                        <ImageWrapper>
                            <Image
                            onMouseEnter={() => setShowDescription(true)}
                            onMouseLeave={() => setShowDescription(false)}
                            w='42vw'
                            hw='54vw'
                            ml={showDescription && '-3vw'}
                            src={require('../../../images/web/hasard/2.jpg')} alt='odsjb' />
                            <ImageDescription showdesc={showDescription}>from the Ballet class series<br/>December, '21</ImageDescription>
                        </ImageWrapper>
                    </ImageLineWrapper> */}
                </PhotosLine>
        </Wrapper>
    );
};

export default HasardPagee;
// https://drive.google.com/file/d/1QRlMYTTlImn3S6J_KJ8Hhk_k_4mRIQ8l/view?usp=share_link
// http://drive.google.com/uc?export=view&id=1PgIbCFDP2fs0-HHluw_5TD1H4lwUPypI

// <div id="image_protection_notice" style="position: absolute; top: 365px; left: 540px; z-index: 2147483647;">This photo is Copyright © 2016 sonia-sztak. All rights reserved.</div>