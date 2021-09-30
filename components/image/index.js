import Image from 'next/image';
import React from 'react';

function ImageComponent({ img }) {
    return (
        <div>
            <Image
                src={img.src}
                width={500}
                height={500}
                alt={`cats ${img.id}`}
            />
        </div>
    );
}

export default ImageComponent;
