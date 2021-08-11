import './Avatar.css';

import React from 'react';

const Avatar = ({src, style, onClick}) =>{
    return (
        <img onClick={onClick} src={src} alt="img" style={style} />
    );
}

export default Avatar;