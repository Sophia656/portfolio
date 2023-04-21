import React from 'react';
import { useState } from 'react';
import { Image, ImageDescription, ImageLineWrapper, ImageWrapper, PhotosLine, Title, TitleWrapper, Wrapper } from './styled';

const Documental = () => {
    const [showDescription, setShowDescription] = useState(false)

    return (
        <Wrapper>
            <TitleWrapper>
                <Title>DOCUMENTARY PHOTOGRAPHY</Title>
                <PhotosLine>
                    <ImageLineWrapper>
                        <ImageWrapper>
                            <Image
                            onMouseEnter={() => setShowDescription(true)}
                            onMouseLeave={() => setShowDescription(false)}
                            w='42vw'
                            hw='54vw'
                            ml={showDescription && '3vw'}
                            src={require('../../../images/web/documental/1.jpg')} alt='odsjb' />
                            <ImageDescription showdesc={showDescription}>from the Summer vision series<br/>June, '21</ImageDescription>
                        </ImageWrapper>
                        <ImageWrapper>
                            <Image 
                            onMouseEnter={() => setShowDescription(true)} 
                            onMouseLeave={() => setShowDescription(false)} 
                            hw='48vw'
                            ml={showDescription && '-3vw'}
                            src={require('../../../images/web/documental/55.jpg')} 
                            alt='odsjb' />
                            <ImageDescription showdesc={showDescription}>from the Summer vision series<br/>June, '21</ImageDescription>
                        </ImageWrapper>
                    </ImageLineWrapper>
                    <ImageLineWrapper>
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
                            src={require('../../../images/web/documental/16.jpg')} alt='odsjb' />
                            <ImageDescription showdesc={showDescription}>from the Ballet class series<br/>December, '21</ImageDescription>
                        </ImageWrapper>
                    </ImageLineWrapper>
                    <ImageLineWrapper>
                        <ImageWrapper>
                            <Image
                            onMouseEnter={() => setShowDescription(true)}
                            onMouseLeave={() => setShowDescription(false)}
                            w='42vw'
                            hw='54vw'
                            ml={showDescription && '3vw'}
                            src={require('../../../images/web/documental/52.jpg')} alt='odsjb' />
                            <ImageDescription showdesc={showDescription}>from the Summer vision series<br/>June, '21</ImageDescription>
                        </ImageWrapper>
                        <ImageWrapper>
                            <Image 
                            onMouseEnter={() => setShowDescription(true)} 
                            onMouseLeave={() => setShowDescription(false)} 
                            hw='48vw'
                            ml={showDescription && '-3vw'}
                            src={require('../../../images/web/documental/45.jpg')} 
                            alt='odsjb' />
                            <ImageDescription showdesc={showDescription}>from the Summer vision series<br/>June, '21</ImageDescription>
                        </ImageWrapper>
                    </ImageLineWrapper>
                    <ImageLineWrapper>
                        <ImageWrapper>
                            <Image 
                            onMouseEnter={() => setShowDescription(true)} 
                            onMouseLeave={() => setShowDescription(false)} 
                            hw='48vw'
                            ml={showDescription && '3vw'}
                            src={require('../../../images/web/documental/26.jpg')} 
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
                            src={require('../../../images/web/documental/2.jpg')} alt='odsjb' />
                            <ImageDescription showdesc={showDescription}>from the Ballet class series<br/>December, '21</ImageDescription>
                        </ImageWrapper>
                    </ImageLineWrapper>
                </PhotosLine>
            </TitleWrapper>
        </Wrapper>
    );
};

export default Documental;

// {/* <div>
//                     <Image width='48vw' src={require('../../../images/web/documental/1.jpg')} alt='odsjb' />
//                     <Image mr='2vw' src={require('../../../images/web/documental/55.jpg')} alt='odsjb' />
//                 </div>
//                 <div>
//                     <Image width='48vw' src={require('../../../images/web/documental/1.jpg')} alt='odsjb' />
//                     <Image mr='2vw' src={require('../../../images/web/documental/55.jpg')} alt='odsjb' />
//                 </div>
//                 <div>
//                     <Image width='48vw' src={require('../../../images/web/documental/1.jpg')} alt='odsjb' />
//                     <Image mr='2vw' src={require('../../../images/web/documental/55.jpg')} alt='odsjb' />
//                 </div> */}
