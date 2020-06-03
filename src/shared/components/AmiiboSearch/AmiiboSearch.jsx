import React from 'react';
import './AmiiboSearch.scss'
import { useForm } from "react-hook-form";


export function AmiiboSearch (props) {

    const { register, handleSubmit, watch, errors } = useForm();


    const onSubmit = (data, $event) => {
        console.log('##ABEL## >> AmiiboSearch >>  onSubmit', data);
        console.log('##ABEL## >> AmiiboSearch >>  onSubmit', $event);
        props.fnSubmit(data)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">
                <span className="b-text-label">Name</span>
                <input className="b-input" name="name" id="name"
                       ref={register}/>
            </label>

            <label htmlFor="amiiboSeries">
                <span className="b-text-label">Amiibo Serie</span>

                <input className="b-input" name="amiiboSeries" id="amiiboSeries"
                       ref={register}/>
            </label>

            <label htmlFor="character">
                <span className="b-text-label">Character</span>

                <input className="b-input" name="character" id="character"
                       ref={register}/>
            </label>

            <label htmlFor="gameSeries">
                <span className="b-text-label">Game Serie</span>

                <input className="b-input" name="gameSeries" id="gameSeries"
                       ref={register}/>
            </label>

            <label htmlFor="type">
                <span className="b-text-label">Type</span>
                <select className="b-input" name="type" id="type"
                        ref={register}>
                    <option value=""></option>
                    <option value="figure">Figure</option>
                    <option value="card">Card</option>

                </select>
            </label>

            <input className="b-btn mt-5" type="submit"/>

        </form>
    );
}
