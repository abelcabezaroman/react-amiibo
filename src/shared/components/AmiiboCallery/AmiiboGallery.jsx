import React from 'react';
import './AmiiboGallery.scss'
import styled from "styled-components";


export function AmiiboGallery (props) {

    const Figcaption = styled.figcaption`
  background-color: ${({ theme }) => theme.backgroundOpacity};
  }`;

    return (
        <div className="c-amiibo-gallery">
            <div className="row">
                {props.amiibos.map((item, index) =>
                    <div className="col-4" key={index}>
                        <div className="c-amiibo-gallery__item-container">
                            <figure className="c-amiibo-gallery__item">
                                <img src={item.image} alt="" className="c-amiibo-gallery__img"/>
                                <Figcaption className="c-amiibo-gallery__caption">{item.name}</Figcaption>
                            </figure>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

