import React, { useContext } from 'react';
import { PagesContext } from '../../../components/context/context';
import Modal from '../../../components/modal/Modal';
import MyImage from '../../../components/UI/image/MyImage';
import { Description, ImageLineWrapper, PhotosLine, Title, Wrapper } from './styled';

const HasardPagee = () => {
    const { openModal, rus } = useContext(PagesContext)

    
    return (
        <Wrapper>
            {openModal && <Modal />}
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
                        desc='"Two reclining girls"'
                        date="June, '21"
                        w='42vw'
                        hw='54vw'
                        ml='3vw'
                        cr_year='2021'
                        cr_mt='10vh'
                        />
                        <MyImage
                        link={require('../../../images/web/hasard/15.jpg')}
                        desc='"Sufferer and victim"'
                        date="April, '23"
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2023'
                        cr_mt='10vh'
                        />
                    </ImageLineWrapper>
                    <ImageLineWrapper>
                        <MyImage
                        link={require('../../../images/web/hasard/2.jpg')}
                        desc='"Twist"'
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
                    <ImageLineWrapper>
                        <MyImage
                        link={require('../../../images/web/hasard/7.jpg')}
                        desc='"Indifferentism"'
                        date="June, '21"
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2021'
                        cr_mt='10vh'
                        />
                        <MyImage
                        link={require('../../../images/web/hasard/12.jpg')}
                        desc='"Flexible and steadfast"'
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
                        link={require('../../../images/web/hasard/9.jpg')}
                        desc='Untitled'
                        date="August, '22"
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2022'
                        cr_mt='10vh'
                        />
                        <MyImage
                        link={require('../../../images/web/hasard/22.jpg')}
                        desc='"Sleeping nude from the back"'
                        date="July, '21"
                        w='42vw'
                        hw='54vw'
                        ml='3vw'
                        cr_year='2021'
                        cr_mt='10vh'
                        />
                    </ImageLineWrapper>
                    <ImageLineWrapper>
                        {/* <MyImage
                        link={require('../../../images/web/hasard/17.jpg')}
                        desc='Untitled'
                        date="December, '22"
                        w='42vw'
                        hw='54vw'
                        ml='3vw'
                        cr_year='2022'
                        cr_mt='10vh'
                        /> */}
                        <MyImage
                        link={require('../../../images/web/hasard/30.jpg')}
                        desc='"Flexible and steadfast"'
                        date="July, '21"
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2021'
                        cr_mt='10vh'
                        />
                        <MyImage
                        link={require('../../../images/web/hasard/23.jpg')}
                        desc='"In the arms"'
                        date="April, '23"
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2023'
                        cr_mt='10vh'
                        />
                    </ImageLineWrapper>
                    <ImageLineWrapper>
                        <MyImage
                        link={require('../../../images/web/hasard/25.jpg')}
                        desc='"Power"'
                        date="June, '21"
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2021'
                        cr_mt='10vh'
                        />
                        <MyImage
                        link={require('../../../images/web/hasard/18.jpg')}
                        desc='"Lines and poses"'
                        date="June, '21"
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2021'
                        cr_mt='10vh'
                        />
                    </ImageLineWrapper>
                    {/* <ImageLineWrapper>
                        <MyImage
                        link={require('../../../images/web/hasard/9.jpg')}
                        desc='Untitled'
                        date="August, '22"
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2022'
                        cr_mt='10vh'
                        />
                        <MyImage
                        link={require('../../../images/web/hasard/22.jpg')}
                        desc='"Sleeping nude from the back"'
                        date="July, '21"
                        w='42vw'
                        hw='54vw'
                        ml='3vw'
                        cr_year='2021'
                        cr_mt='10vh'
                        />
                    </ImageLineWrapper> */}
                    <ImageLineWrapper>
                        <MyImage
                        link={require('../../../images/web/hasard/1.jpg')}
                        desc='"Power"'
                        date="June, '21"
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2021'
                        cr_mt='10vh'
                        />
                        <MyImage
                        link={require('../../../images/web/hasard/16.jpg')}
                        desc='"Lines and poses"'
                        date="June, '21"
                        w='25vw'
                        hw='30vw'
                        ml='-3vw'
                        cr_year='2021'
                        cr_mt='10vh'
                        />
                    </ImageLineWrapper>
                </PhotosLine>
        </Wrapper>
    );
};

export default HasardPagee;