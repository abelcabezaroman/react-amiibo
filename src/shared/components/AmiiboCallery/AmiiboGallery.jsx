import React from 'react';
import './AmiiboGallery.scss'
import styled from "styled-components";
import { Link } from "react-router-dom";


export function AmiiboGallery (props) {

    const Figcaption = styled.figcaption`
  background-color: ${({ theme }) => theme.backgroundOpacity};
  }`;

    return (
        <div className="c-amiibo-gallery">
            <div className="row">
                {props.amiibos.map((item, index) =>
                    <div className="col-4" key={index}>
                        <Link to={'amiibos/' + item.tail} className="c-amiibo-gallery__item-container">
                            <figure className="c-amiibo-gallery__item">
                                <img src={item.image} alt="" className="c-amiibo-gallery__img"/>
                                <Figcaption className="c-amiibo-gallery__caption">{item.name}</Figcaption>
                            </figure>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

