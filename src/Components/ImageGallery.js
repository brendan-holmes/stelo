import React from 'react';
import Image from './Image';

function ImageGallery(props){
    const Images = () => {
        if(props.imageUrls.length > 0){
            return props.imageUrls.map((url, index) => {
                return <Image src={url} key={index}/>
            });
        }
        return null;
    }

    return (
        <div className="ImageGallery">
            {Images()}
        </div>
    );
}

export default ImageGallery;