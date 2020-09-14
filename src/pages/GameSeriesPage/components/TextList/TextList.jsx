import React from 'react';
import './TextList.scss'

export function TextList (props) {
    return (
        <div className="c-text-list">
            <div className="row">
                {props.texts.map((item, index) =>
                    <div className="col-12 col-sm-6 col-lg-4" key={index}>
                        <div className="c-text-list__item">
                            <h4 className="c-text-list__caption">{item.name}</h4>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

