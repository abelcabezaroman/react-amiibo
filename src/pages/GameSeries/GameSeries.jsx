import React, { useEffect, useState } from 'react';
import axios from "axios";
import { environment } from "../../environments/environment";
import { AmiiboGallery } from "../../shared/components/AmiiboCallery/AmiiboGallery";
import { TextList } from "../../shared/components/TextList/TextList";

export function GameSeries () {

    const [gameSeries, setGameSeries] = useState([]);

    useEffect(() => {
        axios.get(environment.url + 'gameseries').then(res => {
            console.log('##ABEL## >> Amiibos >>  resacon en las vegas', res);
            setGameSeries(res.data.amiibo);
        })
    }, [])

    return (
        <div>
            <h1 className="b-text-primary d-flex justify-content-center">Game Series</h1>
            <TextList texts={gameSeries}/>
        </div>
    );
}

