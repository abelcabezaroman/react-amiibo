import React from 'react';
import { useForm } from 'react-hook-form';

export default function ContactPage() {
    const { register, handleSubmit, errors, reset, watch } = useForm();

    const sendContact = (data) => { console.log(data); reset() };

    // console.log(watch('surname'))
    const amiibos = ['Mario', 'Luigi', 'Link']

    return (
        <div className="d-flex justify-content-center">
            {/* <form onSubmit={handleSubmit(sendContact)}>
                <input type="text" name="name" ref={register({required: true})} />
                {errors.name && <span>This field is required</span>}

                <input type="text" name="surname" ref={register()} />
                <input type="submit" value="Enviar" />
            </form> */}

            <form onSubmit={handleSubmit(sendContact)}>

                <label htmlFor="name">
                    <span className="b-text-label">Name</span>

                    <input id="name" className="b-input" type="text" name="name" ref={register({ required: true })} />
                    {errors.name && <span>This field is required</span>}
                </label>

                <label htmlFor="email">
                    <span className="b-text-label">Email</span>
                    <input id="email" className="b-input" type="text" name="email" ref={register({ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} />
                    {errors.email && <span>This field is required and need to be an email</span>}
                </label>

                <label htmlFor="favoriteAmiibo">
                    <span className="b-text-label">Favorite amiibo</span>

                    <select id="favoriteAmiibo" className="b-select" name="favoriteAmiibo" ref={register({ required: true })}>
                        {amiibos.map((amiibo, index) => <option key={index} value={amiibo}>{amiibo}</option>)}
                    </select>
                </label>

                <label htmlFor="message">
                    <span className="b-text-label">Message</span>
                    <textarea id="message" className="b-input" cols="30" rows="10" name="message" ref={register({ required: true, minLength: 5, maxLength: 255 })}></textarea>
                    {errors.message && <span>This field is required, need to be more than 5 and less than 255</span>}
                </label>

                <input className="b-btn" type="submit" value="Enviar" />
            </form>
        </div>
    )
}