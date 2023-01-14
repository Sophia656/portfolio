import React, { useEffect, useState } from 'react';
import { Line, TitleItem, TitleWrapper } from './styled';

const Title = () => {
    const [title, setTitle] = useState([])
    const [surname, setSurname] = useState(true)
    const [showname, setShowname] = useState(false)

    useEffect(() => {
        const arr = [...'sophiaantropova']
        const result = []
        setTimeout(() => {
            setSurname(false)
            setShowname(true)
            for (let i = 0; i < arr.length; i++) {
                setTimeout(() => {
                    if (i > 5) {
                        result.push({let: arr[i], color: true})
                    } else {
                        result.push({let: arr[i], color: false})
                    }
                    setTitle([...result])
                }, 300 * (i + 1));
            }
        }, 2000);
        setTimeout(() => {
            setSurname(true)
            setTimeout(() => {
                setSurname(false)
            }, 10000);
        }, 7000);
    }, [])

    return (
        <TitleWrapper>
            {showname &&
                title.map((i, index) => 
                    <TitleItem key={index} color={i.color}>{i.let}</TitleItem>
                )
            }
                <Line secframe={surname} />
        </TitleWrapper>
    );
};

export default Title;