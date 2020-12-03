import axios from 'axios';
import React, {useEffect, useState} from 'react';
import AmiibosGallery from './components/AmiibosGallery/AmiibosGallery';

export default function AmiibosPage() {
    const [amiibos, setAmiibos] = useState([]);

    useEffect(() => {
        axios.get('https://www.amiiboapi.com/api/amiibo/').then(res => {
            setAmiibos(res.data.amiibo)
        });
    }, [])

    return (
        <AmiibosGallery amiibos={amiibos}/>
    )
}