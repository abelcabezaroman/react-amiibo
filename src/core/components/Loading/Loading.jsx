import React from 'react';
import { useContext } from 'react';
import LoadingContext from '../../../shared/contexts/LoadingContext';
import './Loading.scss';

export default function Loading() {

    const {isLoading} = useContext(LoadingContext);

    return (
        <div className={ isLoading ? 'c-loading c-loading--loading' : 'c-loading'}>
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    );
}