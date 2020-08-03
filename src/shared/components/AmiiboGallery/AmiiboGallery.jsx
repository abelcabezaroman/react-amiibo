import React from 'react';
import './AmiiboGallery.scss'
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

export function AmiiboGallery (props) {
    const history = useHistory();
    // const applyBlack = false;
    //
    // const Figcaption = styled.figcaption`
    //     background-color: ${country === 'Spain' ? '#000000' : 'red'};
    //     color: red;
    //     font-size: 4rem;
    // }`;


    // const items = [];
    //
    // for (let i = 0; i < props.amiibos.length; i++) {
    //     let amiibo = props.amiibos[i];
    //     items.push(<div className="col-4" key={index}>
    //         <Link to={'amiibos/' + amiibo.tail} className="c-amiibo-gallery__item-container">
    //             <figure className="c-amiibo-gallery__item">
    //                 <img src={amiibo.image} alt="" className="c-amiibo-gallery__img"/>
    //                 <FigcaptionLocalStyles className="c-amiibo-gallery__caption">{amiibo.name}</FigcaptionLocalStyles>
    //             </figure>
    //         </Link>
    //     </div>)
    // }


    const FigcaptionLocalStyles = styled.figcaption`
        background-color: ${({ theme }) => theme.backgroundOpacity};
    }`;

    // const ParraLocalStyles = styled.p`
    //     color: ${({ theme }) => theme.toggleBorder};
    // }`;
    //
    // const DivLocalStyles = styled.div`
    //     font-size: ${({ theme }) => theme.fontSize};
    // }`;
    //

    function llevame () {
        history.push('/');
    }

    return (
        <div className="c-amiibo-gallery">
            <div className="row">
                <ButtonComponent onClick={llevame}/>
                    {/*{items}*/}
                    {props.amiibos.map((item, index) =>
                        <div className="col-12 col-md-6 col-lg-4" key={index}>
                            <Link to={'amiibos/' + item.tail} className="c-amiibo-gallery__item-container">
                                <figure className="c-amiibo-gallery__item">
                                    <img src={item.image} alt="" className="c-amiibo-gallery__img"/>
                                    <FigcaptionLocalStyles
                                        className="c-amiibo-gallery__caption">{item.name}</FigcaptionLocalStyles>
                                </figure>
                            </Link>
                        </div>
                    )}
            </div>
        </div>
);
}

AmiiboGallery.propTypes = {
    amiibos: [].isRequired,
}
