import React from 'react';
import { Avatar, DescContent, DescLink, Description, DescTitle, DescWrap, Wrapper } from './styled';
import avatar from '../../images/web/000.jpg';
import Footer from '../../components/footer/Footer';
import { useState } from 'react';
import Copyright from '../../components/UI/copyright/Copyright';
import { useContext } from 'react';
import { PagesContext } from '../../components/context/context';

const Contacts = () => {
    const {rus} = useContext(PagesContext)
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
                    <DescTitle rus={rus}>{rus ? 'КОНТАКТЫ' : 'CONTACTS'}</DescTitle>
                    <DescContent rus={rus}>
                        <p>{rus
                        ?
                        'По всем вопросам и заказам съемок:'
                        :
                        'For all the inquiries and booking please contact:'
                        }</p>
                        <p>
                            <DescLink rus={rus} href="mailto:antropovasophia@gmail.com">antropovasophia@gmail.com</DescLink>
                        </p>
                        <p>{rus ? 'или' : 'or'}</p>
                        <p>
                            <DescLink rus={rus} href="https://t.me/sophia_antropova">telegram: @antropovasophia</DescLink>
                        </p>
                    </DescContent>
                </Description>
            </DescWrap>
            <Footer />
        </Wrapper>
    );
};

export default Contacts;