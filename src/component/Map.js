import React, {useEffect} from 'react';
import KakaoMapScript from "./KakaoMapScript";

export default function Map(props) {

    useEffect(() => {
        KakaoMapScript();
    }, []);

    return (
        <div id='myMap'></div>
    );
}