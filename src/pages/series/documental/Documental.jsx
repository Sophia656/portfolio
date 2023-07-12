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
                        desc={rus ? 'из серии "Летние видения"' : 'from the Summer vision series'}
                        w='42vw'
                        hw='54vw'
                        ml='3vw'
                        cr_year='2021'
                        />
                        <MyImage
                        link={require('../../../images/web/documental/55.jpg')}
                        desc={rus ? 'из серии "Летние видения"' : 'from the Summer vision series'}
                        w='35vw'
                        hw='48vw'
                        ml='-3vw'
                        cr_year='2021'
                        />
                    </ImageLineWrapper>
                    <ImageLineWrapper>
                        <MyImage
                        link={require('../../../images/web/documental/15.jpg')}
                        desc={rus ? 'из серии "Балетный класс"' : 'from the Ballet class series'}
                        w='35vw'
                        hw='48vw'
                        ml='3vw'
                        cr_year='2021'
                        />
                        <MyImage
                        link={require('../../../images/web/documental/16.jpg')}
                        desc={rus ? 'из серии "Балетный класс"' : 'from the Ballet class series'}
                        w='42vw'
                        hw='54vw'
                        ml='-3vw'
                        cr_year='2021'
                        />
                    </ImageLineWrapper>
                    <ImageLineWrapper>
                        <MyImage
                        link={require('../../../images/web/documental/31.jpg')}
                        desc={rus ? 'из серии "Летние видения"' : 'from the Summer vision series'}
                        w='42vw'
                        hw='54vw'
                        ml='3vw'
                        cr_year='2020'
                        />
                        <MyImage
                        link={require('../../../images/web/documental/41.jpg')}
                        desc={rus ? 'из серии "Летние видения"' : 'from the Summer vision series'}
                        w='35vw'
                        hw='48vw'
                        ml='-3vw'
                        cr_year='2020'
                        />
                    </ImageLineWrapper>
                    <ImageLineWrapper>
                        <MyImage
                        link={require('../../../images/web/documental/57.jpg')}
                        desc={rus ? 'из серии "Летние видения"' : 'from the Summer vision series'}
                        w='42vw'
                        hw='54vw'
                        ml='3vw'
                        cr_year='2020'
                        />
                        <MyImage
                        link={require('../../../images/web/documental/2.jpg')}
                        desc={rus ? 'из серии "Летние видения"' : 'from the Summer vision series'}
                        w='35vw'
                        hw='48vw'
                        ml='-3vw'
                        cr_year='2020'
                        />
                    </ImageLineWrapper>
                    <ImageLineWrapper>
                        <MyImage
                        link={require('../../../images/web/documental/8.jpg')}
                        desc={rus ? 'из серии "Между городом Да и городом Нет"' : 'from the Between the city Yes end the city No series'}
                        w='42vw'
                        hw='54vw'
                        ml='3vw'
                        cr_year='2020'
                        />
                        <MyImage
                        link={require('../../../images/web/documental/58.jpg')}
                        desc={rus ? 'из серии "Между городом Да и городом Нет"' : 'from the Between the city Yes end the city No series'}
                        w='35vw'
                        hw='48vw'
                        ml='-3vw'
                        cr_year='2023'
                        />
                    </ImageLineWrapper>
                    <ImageLineWrapper>
                        <MyImage
                        link={require('../../../images/web/documental/38.jpg')}
                        desc={rus ? 'из серии "Между городом Да и городом Нет"' : 'from the Between the city Yes end the city No series'}
                        w='42vw'
                        hw='54vw'
                        ml='3vw'
                        cr_year='2019'
                        />
                        <MyImage
                        link={require('../../../images/web/documental/37.jpg')}
                        desc={rus ? 'из серии "Между городом Да и городом Нет"' : 'from the Between the city Yes end the city No series'}
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2019'
                        />
                    </ImageLineWrapper>
                    <ImageLineWrapper>
                        <MyImage
                        link={require('../../../images/web/documental/20.jpg')}
                        desc={rus ? 'из серии "Летние видения"' : 'from the Summer vision series'}
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2020'
                        />
                        <MyImage
                        link={require('../../../images/web/documental/6.jpg')}
                        desc={rus ? 'из серии "Летние видения"' : 'from the Summer vision series'}
                        w='42vw'
                        hw='54vw'
                        ml='3vw'
                        cr_year='2020'
                        />
                    </ImageLineWrapper>
                </PhotosLine>
        </Wrapper>
    );
};

export default Documental;
