import React from 'react';
import './AmiibosGallery.scss';

export default function AmiibosGallery(props) {

    return (
        <div className="c-amiibos-gallery">
            <div className="row">
                {props.amiibos.map((amiibo, index) => <div key={index} className="col-12 col-md-6 col-lg-4 col-xl-3">
                    <figure className="c-amiibos-gallery__figure" >
                        <img className="c-amiibos-gallery__img" src={amiibo.image} alt={amiibo.name} />
                        <figcaption>{amiibo.name}</figcaption>
                    </figure>
                </div>)}
            </div>
        </div>
    )
}