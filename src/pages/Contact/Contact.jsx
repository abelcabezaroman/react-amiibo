import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AmiibosContext } from "../../shared/contexts/AmiibosContext";

export function Contact () {
    const { amiibos, setAmiibos } = useContext(AmiibosContext);

    const { register, handleSubmit, watch, errors } = useForm();


    const onSubmit = data => console.log(data);


    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <input name="name" defaultValue="Abel Cabeza Román" ref={register({ required: true })}/>
            {errors.name && <span>This field is required</span>}

            <input name="email"
                   ref={register({ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}/>
            {errors.email && <span>This field is required and need to be an email</span>}

            <select name="favoriteAmiibo" ref={register({ required: true })}>
                {amiibos.map(amiibo =>
                    <option value={amiibo.name}>{amiibo.name}</option>
                )}
            </select>
            {errors.favoriteAmiibo && <span>This field is required</span>}

            <input type="submit"/>

        </form>
    );
}

