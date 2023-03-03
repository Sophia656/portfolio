import React from 'react';
import { useRef } from 'react';
import { Image, PhotosLine, Title, Wrapper } from './styled';

const HasardPagee = () => {
    const currref = useRef()

    console.log(currref)
    return (
        <Wrapper>
            <Title>HASARD OBJECTIF</Title>
            <PhotosLine>
                <Image ref={currref} width='31vw' src='http://drive.google.com/uc?export=view&id=1QRlMYTTlImn3S6J_KJ8Hhk_k_4mRIQ8l' alt='odsjb' />
                <Image width='17vw' src='http://drive.google.com/uc?export=view&id=1u-xpMrpWgVg4owvtNjpk_pdZHlo_xZ47' alt='odsjb' />
                <Image mr='2vw' src='http://drive.google.com/uc?export=view&id=14ZppMdecnp_JAizaqGAtyWq057RUaaxY' alt='odsjb' />
            </PhotosLine>
        </Wrapper>
    );
};

export default HasardPagee;
// https://drive.google.com/file/d/1QRlMYTTlImn3S6J_KJ8Hhk_k_4mRIQ8l/view?usp=share_link
// http://drive.google.com/uc?export=view&id=1PgIbCFDP2fs0-HHluw_5TD1H4lwUPypI

// <div id="image_protection_notice" style="position: absolute; top: 365px; left: 540px; z-index: 2147483647;">This photo is Copyright © 2016 sonia-sztak. All rights reserved.</div>