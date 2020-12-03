import React from 'react';

export default function AmiibosGallery(props) {

    return (
        <div>
            {props.amiibos.map((amiibo, index) => <figure key={index}>
                <img src={amiibo.image} alt={amiibo.name} />
                <figcaption>{amiibo.name}</figcaption>
            </figure>)}
        </div>
    )
}