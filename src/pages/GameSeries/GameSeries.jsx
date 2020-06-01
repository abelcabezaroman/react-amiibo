import React, { useEffect, useState } from 'react';
import axios from "axios";
import { environment } from "../../environments/environment";
import { TextList } from "../../shared/components/TextList/TextList";

export function GameSeries () {

    const [gameSeries, setGameSeries] = useState([]);

    useEffect(() => {
        axios.get(environment.url + 'gameseries').then(res => {
            const filteredAmiibos = uniqueArray(res.data.amiibo, 'name');
            setGameSeries(filteredAmiibos);
        })
    }, [])

    return (
        <div>
            <h1 className="b-text-primary d-flex justify-content-center">Game Series</h1>
            <TextList texts={gameSeries}/>
        </div>
    );
}

const uniqueArray = (array, key) => {
    return array.filter((item, index, self) =>
        index === self.findIndex((t) => (
            t[key] === item[key]
        ))
    )
};
