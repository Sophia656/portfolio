import React, { useContext } from 'react';
import { PagesContext } from '../../../components/context/context';
import MyImage from '../../../components/UI/image/MyImage';
import { ImageLineWrapper, PhotosLine, Title, Wrapper } from './styled';

const Documental = () => {
    const { rus } = useContext(PagesContext)

    return (
        <Wrapper>
                <Title rus={rus}>{rus ? 'ДОКУМЕНТАЛЬНАЯ ФОТОГРАФИЯ' : 'DOCUMENTARY PHOTOGRAPHY'}</Title>
                <PhotosLine>
                    <ImageLineWrapper>
                        <MyImage
                        link={require('../../../images/web/documental/1.jpg')}
                        desc='from the Summer vision series'
                        date="June, '21"
                        w='42vw'
                        hw='54vw'
                        ml='3vw'
                        cr_year='2021'
                        cr_mt='10vh'
                        />
                        <MyImage
                        link={require('../../../images/web/documental/55.jpg')}
                        desc='from the Summer vision series'
                        date="June, '21"
                        w='35vw'
                        hw='48vw'
                        ml='-3vw'
                        cr_year='2021'
                        cr_mt='10vh'
                        />
                    </ImageLineWrapper>
                    <ImageLineWrapper>
                        <MyImage
                        link={require('../../../images/web/documental/59.jpg')}
                        desc='from the Ballet class series'
                        date="December, '21"
                        w='35vw'
                        hw='48vw'
                        ml='3vw'
                        cr_year='2021'
                        cr_mt='10vh'
                        />
                        <MyImage
                        link={require('../../../images/web/documental/60.jpg')}
                        desc='from the Ballet class series'
                        date="December, '21"
                        w='42vw'
                        hw='54vw'
                        ml='-3vw'
                        cr_year='2021'
                        cr_mt='10vh'
                        />
                    </ImageLineWrapper>
                    {/* <ImageLineWrapper>
                        <MyImage
                        link={require('../../../images/web/documental/15.jpg')}
                        desc='from the Ballet class series'
                        date="December, '21"
                        w='35vw'
                        hw='48vw'
                        ml='3vw'
                        cr_year='2021'
                        cr_mt='10vh'
                        />
                        <MyImage
                        link={require('../../../images/web/documental/16.jpg')}
                        desc='from the Ballet class series'
                        date="December, '21"
                        w='42vw'
                        hw='54vw'
                        ml='-3vw'
                        cr_year='2021'
                        cr_mt='10vh'
                        />
                    </ImageLineWrapper> */}
                    <ImageLineWrapper>
                        <MyImage
                        link={require('../../../images/web/documental/31.jpg')}
                        desc='from the Summer vision series'
                        date="July, '20"
                        w='42vw'
                        hw='54vw'
                        ml='3vw'
                        cr_year='2020'
                        cr_mt='10vh'
                        />
                        <MyImage
                        link={require('../../../images/web/documental/41.jpg')}
                        desc='from the Summer vision series'
                        date="July, '20"
                        w='35vw'
                        hw='48vw'
                        ml='-3vw'
                        cr_year='2020'
                        cr_mt='10vh'
                        />
                    </ImageLineWrapper>
                </PhotosLine>
        </Wrapper>
    );
};

export default Documental;
