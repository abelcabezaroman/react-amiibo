import React from 'react';
import './AmiibosGallery.scss';

export default function AmiibosGallery(props) {

    return (
        <div className="c-amiibos-gallery">
            <div className="row">
                {props.amiibos.map((amiibo, index) => <div className="col-4">
                    <figure className="c-amiibos-gallery__figure" key={index}>
                        <img className="c-amiibos-gallery__img" src={amiibo.image} alt={amiibo.name} />
                        <figcaption>{amiibo.name}</figcaption>
                    </figure>
                </div>)}
            </div>
        </div>
    )
}