import React from 'react';
import OurServices from '../OurServices';

const ServiceImg = () => {
    const images = [
        {
            id:1,
            img: "https://i.ibb.co/z4CXN1Q/img1.jpg"
        },
        {
            id:2,
            img: "https://i.ibb.co/M1jTr7V/img2.jpg"
        },
        {
            id:3,
            img: "https://i.ibb.co/9tWd6Gs/img3.jpg"
        },
        {
            id:4,
            img: "https://i.ibb.co/Y35RtTD/img4.jpg"
        },
        {
            id:5,
            img: "https://i.ibb.co/WFwyR08/img5.jpg"
        },
        {
            id:6,
            img: "https://i.ibb.co/WyznGZF/img6.jpg"
        }

    ]
    return (
        <div>
            {
                images.map(img => <OurServices key={img.id} photo={img} />)
            }
        </div>
    );
};

export default ServiceImg;