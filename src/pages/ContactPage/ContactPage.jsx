import React, { useContext, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { AmiibosContext } from "../../shared/contexts/AmiibosContext";
import { LanguageContext } from "../../shared/contexts/LanguageContext";
import axios from "axios";

export function ContactPage () {
    const [amiibos, setAmiibos] = useContext(AmiibosContext);
    const language = useContext(LanguageContext);

    const { register, handleSubmit, reset , errors } = useForm();

    // console.log(watch('surname'));

    const onSubmit = (data) => {console.log(data); reset()};

    useEffect(() => {
        if (!amiibos.length) {
            axios.get(process.env.REACT_APP_BACK_URL + 'amiibo').then(res => {
                setAmiibos(res.data.amiibo);
            })
        }
    }, [])

    return (
        <div className="d-flex justify-content-center">
            {/*<form onSubmit={handleSubmit(onSubmit)}>*/}
            {/*    <input type="text" name="name" ref={register({required: true})}/>*/}
            {/*    {errors.name && 5 > 2 && <span>This field is required</span>}*/}

            {/*    <input type="text" name="surname" ref={register}/>*/}
            {/*    <input type="submit" value="Enviar"/>*/}
            {/*</form>*/}


            <form onSubmit={handleSubmit(onSubmit)} className="b-form">
                <p>Actual Language: {language}</p>
                <label htmlFor="name">
                    <span className="b-text-label">Name</span>
                    <input type="text" className="b-input" name="name" id="name" defaultValue="Abel Cabeza Román"
                           ref={register({ required: true })}/>
                    {errors.name && <span>This field is required</span>}
                </label>

                <label htmlFor="email">
                    <span className="b-text-label">Email</span>

                    <input type="text" className="b-input" name="email" id="email"
                           defaultValue="contacto@abelcabezaroman.com"
                           ref={register({ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}/>
                    {errors.email && <span>This field is required and need to be an email</span>}
                </label>

                <label htmlFor="favoriteAmiibo">
                    <span className="b-text-label">Favorite amiibo</span>
                    <select className="b-select" name="favoriteAmiibo" id="favoriteAmiibo"
                            ref={register({ required: true })}>
                        {amiibos.map((amiibo, i) =>
                            <option key={i} className="b-select__option" value={amiibo.name}>{amiibo.name}</option>
                        )}
                    </select>
                    {errors.favoriteAmiibo && <span>This field is required</span>}
                </label>

                <label htmlFor="message">
                    <span className="b-text-label">Message</span>
                    <textarea className="b-input" name="message" id="message" cols="30" rows="10"
                              ref={register({ required: true, minLength: 5, maxLength: 255 })}/>
                    {errors.message && <span>This field is required and need to be more than 5 and less than 255 characters</span>}
                </label>

                <input className="b-btn mt-3" type="submit"/>

            </form>
        </div>
    );
}

