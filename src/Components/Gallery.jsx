import React, { useEffect, useState } from 'react';
import ImageCard from './ImageCard';

const Gallery = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        fetch("gallery.json")
            .then(res => res.json())
            .then(data => setImages(data))
    }, [])
    return (
        <div className='text-center my-20'>
            <h1 className='text-4xl font-bold text-[#9C29B2]'>Robo Gallery</h1>
            <p className='text-5xl text-[#88C90D] my-7'>Most Popular Robot Toys For Your Child</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {
                    images.map(image => <ImageCard key={image.id} image={image}></ImageCard>)
                }
            </div>
        </div>
    );
};

export default Gallery;