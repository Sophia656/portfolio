import React, { useEffect, useState } from 'react';
import { Image, PhotosLine, Title, Wrapper } from './styled';

const Documental = () => {
    const [imgs, setImgs] = useState([])

    function shuffle() {
        return 0.5 - Math.random();
    }

    useEffect(() => {
        // const arr = []
        // for (let i = 0; i < 55; i++) {
        //     arr.push(<img src={require(`src/images/web/documental/${i}.jpg`)} />)
        // }
        // console.log(arr)
    })
    return (
        <Wrapper>
            <Title>DOCUMENTAL</Title>
            <PhotosLine>
                <Image width='48vw' src={require('../../../images/web/documental/1.jpg')} alt='odsjb' />
                <Image mr='2vw' src={require('../../../images/web/documental/3.jpg')} alt='odsjb' />
            </PhotosLine>
        </Wrapper>
    );
};

export default Documental;

// function shuffle(arr) {
//     for (var i = arr.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }
//     return arr;
// }
// var array = [0,1,2,3,4,5,6,7,8,9];
// function shuffle() {
//     return 0.5 - Math.random();
//   }
  
//   console.log(array.sort(shuffle))

// console.log(shuffle(array));
