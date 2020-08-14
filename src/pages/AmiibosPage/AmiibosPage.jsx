import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { AmiibosContext } from "../../shared/contexts/AmiibosContext";
import { AmiiboSearch } from "./components/AmiiboSearch/AmiiboSearch";
import { ButtonStyles } from "../../shared/styles/ButtonStyles";
import { AmiiboGallery } from "./components/AmiiboGallery/AmiiboGallery";

export function AmiibosPage () {

    // const [amiibos, setAmiibos] = useState([]);

    const [amiibos, setAmiibos] = useContext(AmiibosContext);
    const [filteredAmiibos, setFilteredAmiibos] = useState([]);


    useEffect(() => {
        if (!amiibos.length) {
            axios.get(process.env.REACT_APP_BACK_URL + 'amiibo/').then(res => {
                const amiibosLocal = res.data.amiibo;
                setAmiibos(amiibosLocal);
                setFilteredAmiibos(amiibosLocal)
            })
        } else {
            setFilteredAmiibos(amiibos)
        }
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
            <ButtonStyles>HEYYY</ButtonStyles>
            <AmiiboSearch fnSubmit={filterAmiibos}/>
            <AmiiboGallery amiibos={filteredAmiibos}/>
        </div>
    );
}

