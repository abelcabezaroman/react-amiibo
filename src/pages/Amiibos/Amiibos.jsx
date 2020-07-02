import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { environment } from "../../environments/environment";
import { AmiiboGallery } from "../../shared/components/AmiiboGallery/AmiiboGallery";
import { AmiibosContext } from "../../shared/contexts/AmiibosContext";
import { AmiiboSearch } from "../../shared/components/AmiiboSearch/AmiiboSearch";

export function Amiibos () {

    // const [amiibos, setAmiibos] = useState([]);

    const [amiibos, setAmiibos] = useContext(AmiibosContext);
    const [filteredAmiibos, setFilteredAmiibos] = useState([]);


    useEffect(() => {
        axios.get(environment.url + 'amiibo').then(res => {
            const amiibosLocal = res.data.amiibo;
            setAmiibos(amiibosLocal);
            setFilteredAmiibos(amiibosLocal)
        })
    }, [])

    const filterAmiibos = (filterValues) => {
        const filteredLocalAmiibos = [];
        for (const amiibo of amiibos) {
            let amiiboIsOk = true;
            for (const key in filterValues) {
                if (filterValues.hasOwnProperty(key)) {
                    const localValue = amiibo[key];
                    const filterValue = filterValues[key];
                    if (!localValue || (localValue && filterValue && filterValue !== '' && !localValue.toLowerCase().includes(filterValue.toLowerCase()))) {
                        amiiboIsOk = false;
                        break;
                    }
                }
            }
            if (amiiboIsOk) {
                filteredLocalAmiibos.push(amiibo);
            }
        }
        setFilteredAmiibos(filteredLocalAmiibos);
    }

    return (
        <div>
            <h1 className="b-text-primary d-flex justify-content-center">Amiibos</h1>
            <AmiiboSearch fnSubmit={filterAmiibos}/>
            <AmiiboGallery amiibos={filteredAmiibos}/>
        </div>
    );
}

