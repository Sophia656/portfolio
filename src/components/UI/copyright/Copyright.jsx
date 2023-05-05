import React from 'react';
import { CopyrightWrap } from './styled';

const Copyright = ({mt, year}) => {

    return (
        <CopyrightWrap mt={mt}>
            This photo is Copyright © {year}<br/> Sophia Antropova. All rights reserved.
        </CopyrightWrap>
    );
};

export default Copyright;