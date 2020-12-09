import React from 'react';
import { useForm } from 'react-hook-form';

export default function ContactPage() {
    const { register, handleSubmit, errors, reset, watch} = useForm();

    const sendContact = (data) => {console.log(data);reset()};

    // console.log(watch('surname'))

    return (
        <div className="d-flex justify-content-center">
            <form onSubmit={handleSubmit(sendContact)}>
                <input type="text" name="name" ref={register({required: true})} />
                {errors.name && <span>This field is required</span>}

                <input type="text" name="surname" ref={register()} />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}