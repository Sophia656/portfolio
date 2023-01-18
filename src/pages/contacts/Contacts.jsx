import React from 'react';
import { Avatar, Description, Wrapper } from './styled';
import avatar from '../../images/web/avatar.jpg';
import Footer from '../../components/footer/Footer';

const Contacts = () => {
    return (
        <Wrapper>
            <Avatar src={avatar} alt="" />
            <Description>
                <h4>About</h4>
            </Description>
            <Footer />
        </Wrapper>
    );
};

export default Contacts;