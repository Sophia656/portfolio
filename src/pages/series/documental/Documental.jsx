import React, { useContext, useEffect, useRef, useState } from 'react';
import { PagesContext } from '../../../components/context/context';
import Button from '../../../components/UI/button/Button';
import { Image, PhotosLine, Title, TitleWrapper, Wrapper } from './styled';

const Documental = () => {
    const [showMore, setShowMore] = useState(false)
    const [scroll, setScroll] = useState(0);
    const { baseHeight, setBaseHeight } = useContext(PagesContext);

    // const handleScroll = () => {
    //     setScroll(window.scrollY);
    // };

    const handleScrollToBottom = () => {
        setBaseHeight('fit-content')
        setShowMore(true)
        window.scrollTo({
            top: 750,
            behavior: "smooth"
        })
    };

    return (
        <Wrapper>
            <TitleWrapper>
                <Title>DOCUMENTAL</Title>
                <PhotosLine>
                    <Image w='42vw' hw='44vw' src={require('../../../images/web/documental/1.jpg')} alt='odsjb' />
                    <Image mr='2vw' src={require('../../../images/web/documental/55.jpg')} alt='odsjb' />
                </PhotosLine>
                <Button handleClick={() => handleScrollToBottom()} rotate='-180deg' b='0' display={showMore && 'none'} />
            </TitleWrapper>
            {showMore &&
            <div>
                <PhotosLine>
                    <Image w='42vw' hw='44vw' src={require('../../../images/web/documental/1.jpg')} alt='odsjb' />
                    <Image mr='2vw' src={require('../../../images/web/documental/55.jpg')} alt='odsjb' />
                </PhotosLine>
                <PhotosLine>
                    <Image w='42vw' hw='44vw' src={require('../../../images/web/documental/1.jpg')} alt='odsjb' />
                    <Image mr='2vw' src={require('../../../images/web/documental/55.jpg')} alt='odsjb' />
                </PhotosLine>
                <button onClick={window.scrollTo({
            top: 0,
            behavior: "smooth"
        })}>kjgsac</button>
            </div>
            }
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
