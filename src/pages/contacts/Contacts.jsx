import React from 'react';
import { Avatar, Description, DescWrap, Wrapper } from './styled';
import avatar from '../../images/web/000.jpg';
import Footer from '../../components/footer/Footer';
import { useState } from 'react';
import Copyright from '../../components/UI/copyright/Copyright';

const Contacts = () => {
    const [showCr, setShowCr] = useState(false)
    const onHandleRightClick = (event) => {
        event.preventDefault()
        setShowCr(true)
        setTimeout(() => {
            setShowCr(false)
        }, 1500);
    }

    return (
        <Wrapper>
            <DescWrap>
                {showCr && <Copyright />}
                <Avatar onContextMenu={onHandleRightClick} src={avatar} alt="" />
                <Description>
                    I am commited to a humanistic understanding of life that is centered on the essence of the human being. Where from and content are inextricably linked and the human body is a perfection of his inner world. In other words, the shot captured in an instant is the quintessence of the conscious and the unconscious.
                    <br/>
                    --------------------------------------------------
                    <br/>
                    {/* В фотографии нет объективного "до" и "после", есть только момент — 1/200 секунды. Она не расскажет вам, что было за кадром, сколько сотен практически одинаковых снимков было сделано, в какой обстановке она была снята. В ней лишь мгновение, видение случайно явившегося мира.
                    <br/> */}
                    Я опираюсь на гуманистическое познание жизни, в центре которого находится сущность человека. Где форма и содержание неразрывно связаны, а человеческое тело является отражением его внутреннего мира. Иными словами, запечатленный во мгновении снимок является квинтэссенцией осознанного и бессознательного.
                </Description>
            </DescWrap>
            <Footer />
        </Wrapper>
    );
};

export default Contacts;