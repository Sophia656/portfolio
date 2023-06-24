import React, { useContext, useEffect, useRef, useState } from 'react';
import { PagesContext } from '../../components/context/context';
import Title from '../../components/title/Title';
import { AgeModal, AgeModalWrapper, DescTitle, ModalBtn, ModalBtnsWrap, ModalDesc, Wrapper } from './styled';

const HomePage = () => {
    const {testAgeModal, setTestAgeModal, rus} = useContext(PagesContext)
    const [showCursor, setShowCursor] = useState(false)
    // const [testAgeModal, setTestAgeModal] = useState(true)

    const startSettimeout = () => {
        setTimeout(() => {
            setShowCursor(true)
        }, 7000);
    }

    // useEffect(() => {

    //     setTimeout(() => {
    //         setShowCursor(true)
    //     }, 7000);
    // }, [])

    return (
        <>
        {testAgeModal
        ?
        <AgeModalWrapper>
            <AgeModal>
                <ModalDesc rus={rus}>
                    <DescTitle rus={rus}>
                        {rus ? 'ПРЕДУПРЕЖДЕНИЕ О СОДЕРЖАНИИ' : 'CONTENT WARNING'}
                    </DescTitle>
                        <br/>
                        <br/>
                        <br/>
                        {rus
                        ?
                        'ВЫ СОБИРАЕТЕСЬ ЗАЙТИ НА САЙТ, КОТОРЫЙ МОЖЕТ СОДЕРЖАТЬ КОНТЕНТ ДЛЯ ВЗРОСЛЫХ. ЭТИ ФОТОГРАФИИ ПРЕДНАЗНАЧЕНЫ ТОЛЬКО ДЛЯ ВЗРОСЛЫХ. ДЛЯ ПОЛУЧЕНИЯ ДОСТУПА ВЫ ДОЛЖНЫ ПОДТВЕРДИТЬ СВОЙ СОВЕРШЕННОЛЕТНИЙ ВОЗРАСТ.'
                    :
                    'YOU ARE ABOUT TO ENTER A SITE THAT MAY CONTAIN ADULT CONTENT. THIS PHOTOS ARE DESIGNED FOR ADULTS ONLY. FOR ACCESS, YOU MUST CONFIRM THE AGE OF MAJORITY.'
                    }
                            
                        </ModalDesc>
                    <ModalBtn rus={rus} onClick={() => {setTestAgeModal(false); startSettimeout()}}>
                        {rus ? 'МНЕ ЕСТЬ 18' : 'I AM 18 OR OLDER'}
                    </ModalBtn>
            </AgeModal>
        </AgeModalWrapper>
        :
        <Wrapper cursor={showCursor}>
            <Title cursor={showCursor} />
        </Wrapper>
        }
        
        </>
    );
};

export default HomePage;


// PLEASE CONFIRM YOUR AGE FOR VIEWING