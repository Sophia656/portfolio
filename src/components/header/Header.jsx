import React from 'react';
import { MenuItem, MenuWrapper, Wrapper } from './styled';

const Header = () => {


    return (
        <Wrapper>
            <MenuWrapper>
                <MenuItem>overview</MenuItem>
                <MenuItem>series</MenuItem>
                <MenuItem>contacts</MenuItem>
            </MenuWrapper>
        </Wrapper>
    );
};

export default Header;