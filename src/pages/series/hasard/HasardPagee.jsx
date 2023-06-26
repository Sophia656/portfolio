import React, { useContext } from 'react';
import { PagesContext } from '../../../components/context/context';
import MyImage from '../../../components/UI/image/MyImage';
import { Description, ImageLineWrapper, PhotosLine, Title, Wrapper } from './styled';

const HasardPagee = () => {
    const { rus } = useContext(PagesContext)

    
    return (
        <Wrapper>
            <Title rus={rus}>
                {rus
                ?
                'ОБЪЕКТИВНАЯ РЕАЛЬНОСТЬ'
                :
                'HASARD OBJECTIF'
                }
            </Title>
            <Description rus={rus}>
                {rus
                ?
                'Я опираюсь на гуманистическое познание жизни, в центре которого находится сущность человека. Где форма и содержание неразрывно связаны, а человеческое тело является отражением его внутреннего мира. Иными словами, запечатленный во мгновении снимок является квинтэссенцией осознанного и бессознательного.'
                :
                'I AM COMMITTED TO A HUMANISTIC UNDERSTANDING OF LIFE THAT IS CENTERED ON THE ESSENCE OF THE HUMAN BEING. WHERE FORM AND CONTENT ARE INEXTRICABLY LINKED AND THE HUMAN BODY IS A REFLECTION OF HIS INNER WORLD. IN OTHER WORDS, THE SHOT CAPTURED IN AN INSTANT IS THE QUINTESSENCE OF THE CONSCIOUS AND THE UNCONSCIOUS.'
                }
                
            </Description>
            <PhotosLine>
                    <ImageLineWrapper>
                        <MyImage
                        link={require('../../../images/web/hasard/3.jpg')}
                        desc={rus ? '"Две лежащие"' : '"Two reclining girls"'}
                        w='42vw'
                        hw='54vw'
                        ml='3vw'
                        cr_year='2021'
                        rus={rus}
                        />
                        <MyImage
                        link={require('../../../images/web/hasard/15.jpg')}
                        desc={rus ? '"Страдалец и жертва"' : '"Sufferer and victim"'}
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2023'
                        />
                    </ImageLineWrapper>
                    <ImageLineWrapper>
                        <MyImage
                        link={require('../../../images/web/hasard/2.jpg')}
                        desc={rus ? '"Твист"' : '"Twist"'}
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2021'
                        />
                        <MyImage
                        link={require('../../../images/web/hasard/8.jpg')}
                        desc={rus ? '"На крючке"' : '"On the hook"'}
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2021'
                        />
                    </ImageLineWrapper>
                    <ImageLineWrapper>
                        <MyImage
                        link={require('../../../images/web/hasard/6.jpg')}
                        desc={rus ? 'Без названия' : 'Untitled'}
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2022'
                        />
                        <MyImage
                        link={require('../../../images/web/hasard/14.jpg')}
                        desc={rus ? '"Спящая обнаженная со спины"' : '"Sleeping nude from the back"'}
                        w='42vw'
                        hw='54vw'
                        ml='3vw'
                        cr_year='2021'
                        />
                    </ImageLineWrapper>
                    <ImageLineWrapper>
                        <MyImage
                        link={require('../../../images/web/hasard/7.jpg')}
                        desc={rus ? '"Индифферентизм"' : '"Indifferentism"'}
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2021'
                        />
                        <MyImage
                        link={require('../../../images/web/hasard/12.jpg')}
                        desc={rus ? '"Бессознательное"' : '"The unconscious"'}
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2021'
                        />
                    </ImageLineWrapper>
                    <ImageLineWrapper>
                        <MyImage
                        link={require('../../../images/web/hasard/9.jpg')}
                        desc={rus ? '"Женственность"' : '"Femininity"'}
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2022'
                        />
                        <MyImage
                        link={require('../../../images/web/hasard/22.jpg')}
                        desc={rus ? '"Влюбленная"' : '"Enamored"'}
                        w='42vw'
                        hw='54vw'
                        ml='3vw'
                        cr_year='2021'
                        />
                    </ImageLineWrapper>
                    <ImageLineWrapper>
                        <MyImage
                        link={require('../../../images/web/hasard/30.jpg')}
                        desc={rus ? '"Близость"' : '"Proximity"'}
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2021'
                        />
                        <MyImage
                        link={require('../../../images/web/hasard/23.jpg')}
                        desc={rus ? '"В объятиях"' : '"In the arms"'}
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2023'
                        />
                    </ImageLineWrapper>
                    <ImageLineWrapper>
                        <MyImage
                        link={require('../../../images/web/hasard/25.jpg')}
                        desc={rus ? '"Сила страха"' : '"The power of fear"'}
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2021'
                        />
                        <MyImage
                        link={require('../../../images/web/hasard/18.jpg')}
                        desc={rus ? '"Сидящий полуобнаженный"' : '"Sitting half-naked"'}
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2021'
                        />
                    </ImageLineWrapper>
                    <ImageLineWrapper>
                        <MyImage
                        link={require('../../../images/web/hasard/1.jpg')}
                        desc={rus ? '"Сознательное"' : '"The conscious"'}
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2021'
                        />
                        <MyImage
                        link={require('../../../images/web/hasard/16.jpg')}
                        desc={rus ? '"Линии и позы"' : '"Lines and poses"'}
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2021'
                        />
                    </ImageLineWrapper>
                </PhotosLine>
        </Wrapper>
    );
};

export default HasardPagee;

// '"Flexible and steadfast"'