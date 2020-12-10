import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import LoadingContext from '../../shared/contexts/LoadingContext';
import { TextList } from './components/TextList/TextList';


export default function GameSeriesPage() {
    const [gameSeries, setGameSeries] = useState([]);
    const {setIsLoading} = useContext(LoadingContext);

    useEffect(() => {
        setIsLoading(true);
        axios.get('https://www.amiiboapi.com/api/gameseries/').then(res => {
            const filteredAmiibos = uniqueArray(res.data.amiibo, 'name');
            setGameSeries(filteredAmiibos);
            setIsLoading(false);
        });
    }, [])

    return (
        <div>
            <h1 className="b-text-primary d-flex justify-content-center">Game Series</h1>
            <TextList texts={gameSeries} />
        </div>
    )
}

const uniqueArray = (array, key) =>
    array.filter((item, index, self) =>
        index === self.findIndex((t) =>
            (
                t[key] === item[key]
            )
        )
    );

