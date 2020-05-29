import React from 'react';
import './AmiiboGallery.scss'

export function AmiiboGallery (props) {
    return (
        <div className="c-amiibo-gallery">
            <div className="row">
                {props.amiibos.map((item, index) =>
                    <div className="col-4" key={index}>
                        <div className="c-amiibo-gallery__item-container">
                            <figure className="c-amiibo-gallery__item">
                                <img src={item.image} alt="" className="c-amiibo-gallery__img"/>
                                <figcaption className="c-amiibo-gallery__caption">{item.name}</figcaption>
                            </figure>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

