import React, { useRef } from 'react';

const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg }) => {
    const imageRef = useRef(null);
    return (
        <img
            onMouseOver={e=> {
                imageRef.current.src = secondaryImg
            }}
            onMouseOut={e=> {
                imageRef.current.src = primaryImg
            }}
            src={primaryImg}
            alt=""
            ref={imageRef} />
    )
}
export default ImageToggleOnMouseOver;
