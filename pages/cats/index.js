import React from 'react';
import CatImage from '../../components/image';
import cat1 from '../../public/images/cat_1.png';
import cat2 from '../../public/images/cat_2.png';
import cat3 from '../../public/images/cat_3.png';
import cat4 from '../../public/images/cat_4.png';
import cat5 from '../../public/images/cat_5.png';
import cat6 from '../../public/images/cat_6.png';
import cat7 from '../../public/images/cat_7.png';
import cat8 from '../../public/images/cat_8.png';
import cat9 from '../../public/images/cat_9.png';
import cat10 from '../../public/images/cat_10.png';

function catsPage() {
    const images = [
        { id: 1, width: 800, height: 400, src: cat1 },
        { id: 2, width: 800, height: 500, src: cat2 },
        { id: 3, width: 800, height: 1000, src: cat3 },
        { id: 4, width: 800, height: 450, src: cat4 },
        { id: 5, width: 800, height: 800, src: cat5 },
        { id: 6, width: 800, height: 700, src: cat6 },
        { id: 7, width: 800, height: 700, src: cat7 },
        { id: 8, width: 800, height: 700, src: cat8 },
        { id: 9, width: 800, height: 700, src: cat9 },
        { id: 10, width: 800, height: 700, src: cat10 },
    ];

    return (
        <div>
            {images.map((image) => {
                return (
                    <div key={image.id}>
                        <CatImage img={image} />
                    </div>
                );
            })}
        </div>
    );
}

export default catsPage;
