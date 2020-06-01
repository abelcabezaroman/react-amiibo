import React, { useEffect, useState } from 'react';
import axios from "axios";
import { environment } from "../../../environments/environment";
import { useParams } from 'react-router-dom';
import { AmiiboItem } from "../../../shared/components/AmiiboItem/AmiiboItem";

export function AmiiboDetail () {

    // const [amiibos, setAmiibos] = useState([]);

    const tail = useParams().tail;

    const [amiibo, setAmiibo] = useState({});


    useEffect(() => {
        axios.get(environment.url + 'amiibo?tail=' + tail).then(res => {
            setAmiibo(res.data.amiibo[0]);
        })
    }, [])


    return (
        <div>
            <h1 className="b-text-primary d-flex justify-content-center">Amiibo Detail</h1>
            <AmiiboItem amiibo={amiibo}/>
        </div>
    );
}

