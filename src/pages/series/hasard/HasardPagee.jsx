import React, { useContext } from 'react';
import { PagesContext } from '../../../components/context/context';
import MyImage from '../../../components/UI/image/MyImage';
import { Description, ImageLineWrapper, PhotosLine, SubDesc, Title, Wrapper } from './styled';

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
            <SubDesc rus={rus}>
                {rus
                ?
                'На моих моделях нет большей одежды, чем нижнее белье. Потому что одежда укорачивает жизнь снятого образа мгновенно соотнеся его со временем, в котором она носилась. Я раздеваю и укрываю тканью. Потому что образ человека многовековой, ровно также как и образ ткани как таковой. Мне нравится думать, что я избегаю временных рамок, тем самым перенапряюавляя все внимание на эмоцию(эмоцию души, отраженной телом). Я убиваю и время, и движение, делая позу, которая как оголенный нерв, статичной. Так что моя история про то, что мы представляем из себя без всей этой мишуры в виде одежды, аксессуаров, макияжа и маникюра. Что останется, если забрать у нас все это? Стыд? Сила? Страх? Искушение? Робкость? Мы так привыкли к образам, которые сами же себе и создаем, что порой забываем кто мы есть на самом деле.'
            :
            'There are no bigger clothes on my models than underwear. Because clothes shorten the life of the removed image instantly correlating it with the time in which it was worn. I undress and cover with a cloth. Because the image of a person is centuries-old, just like the image of a fabric as such. I like to think that I avoid time frames, thereby overextending all attention to the emotion (the emotion of the soul reflected by the body). I kill both time and movement by making a pose that is like a bare nerve static. So my story is about what we are without all this tinsel in the form of clothes, accessories, makeup and manicure. What will be left if we take it all away from us? Shame? Power? Fear? Temptation? Timidity? We are so used to the images that we create for ourselves that sometimes we forget who we really are.'
            }
            </SubDesc>
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
                        link={require('../../../images/web/hasard/29.jpg')}
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
                        link={require('../../../images/web/hasard/11.jpg')}
                        desc={rus ? '"Сознательное"' : '"The conscious"'}
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2021'
                        />
                        <MyImage
                        link={require('../../../images/web/hasard/26.jpg')}
                        desc={rus ? '"Линии и позы"' : '"Lines and poses"'}
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
                        link={require('../../../images/web/hasard/4.jpg')}
                        desc={rus ? '"Две лежащие"' : '"Two reclining girls"'}
                        w='42vw'
                        hw='54vw'
                        ml='3vw'
                        cr_year='2021'
                        rus={rus}
                        />
                        <MyImage
                        link={require('../../../images/web/hasard/20.jpg')}
                        desc={rus ? '"Страдалец и жертва"' : '"Sufferer and victim"'}
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2023'
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