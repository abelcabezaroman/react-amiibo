import React, { useEffect, useState } from 'react';
import axios from "axios";
import { environment } from "../../environments/environment";
import { AmiiboGallery } from "../../shared/components/AmiiboCallery/AmiiboGallery";

export function Amiibos () {

    const [amiibos, setAmiibos] = useState([]);

    useEffect(() => {
        axios.get(environment.url + 'amiibo').then(res => {
            console.log('##ABEL## >> Amiibos >>  res', res);
            setAmiibos(res.data.amiibo.splice(0,9));
        })
    }, [])

    return (
        <div>
            <AmiiboGallery amiibos={amiibos}/>
        </div>
    );
}

