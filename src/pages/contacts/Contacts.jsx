import React, { useEffect } from 'react';
import { Avatar, Description, Wrapper } from './styled';
import avatar from '../../images/web/000.jpg';
import Footer from '../../components/footer/Footer';
import { useRef } from 'react';

const Contacts = () => {
//     const divBlock = useRef(null);
  
//   const showDivWidth = () => {
//     console.log('contact', divBlock.current.getBoundingClientRect().height);
//  }

//  useEffect(() => {
//     showDivWidth()
//  }, [])
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