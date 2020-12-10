import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import LoadingContext from '../../shared/contexts/LoadingContext';
import AmiibosGallery from './components/AmiibosGallery/AmiibosGallery';
import AmiibosSearch from './components/AmiibosSearch/AmiibosSearch';

let allAmiibos;
export default function AmiibosPage() {
    const [amiibos, setAmiibos] = useState([]);

    const {setIsLoading} = useContext(LoadingContext);

    useEffect(() => {
        setIsLoading(true);
        axios.get('https://www.amiiboapi.com/api/amiibo/').then(res => {
            setAmiibos(res.data.amiibo);
            allAmiibos = res.data.amiibo;
            setIsLoading(false);
        });
    }, [])

    const filterAmiibos = (filterValues) => {
        const filteredAmiibos = allAmiibos.filter(amiibo => amiibo.name.toLowerCase().includes(filterValues.name.toLowerCase()));

        setAmiibos(filteredAmiibos);
    }

    return (
        <>
            <AmiibosSearch fnFilterAmiibos={filterAmiibos}></AmiibosSearch>
            <AmiibosGallery amiibos={amiibos} />
        </>
    )
}