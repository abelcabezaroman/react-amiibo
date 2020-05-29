import React from 'react';

export function AmiiboGallery (props) {
    return (
        <div>
            {props.amiibos.map((item, index) =>
                <figure key={index}>
                    <img src={item.image} alt=""/>
                    <figcaption>{item.name}</figcaption>
                </figure>
            )}
        </div>
    );
}

