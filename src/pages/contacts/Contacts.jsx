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
                    I am committed to a humanistic understanding of life that is centered on the essence of the human being. Where from and content are inextricably linked and the human body is a perfection of his inner world. In other words, the shot captured in an instant is the quintessence of the conscious and the unconscious.
                </Description>
            </DescWrap>
            <Footer />
        </Wrapper>
    );
};

export default Contacts;