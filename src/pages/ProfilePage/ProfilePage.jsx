import React, { useContext } from 'react';
import { FavoriteAmiiboContext } from "../../shared/contexts/FavoriteAmiiboContext";

export function ProfilePage () {
    const [favoriteAmiibo] = useContext(FavoriteAmiiboContext)

    return (
        <h1 className="b-text-primary d-flex justify-content-center">Your favorite Amiibo is {favoriteAmiibo.name}</h1>
    );
}

