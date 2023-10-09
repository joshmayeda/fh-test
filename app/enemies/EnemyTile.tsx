import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Button } from '@mui/material'
// import WebFont from 'webfontloader';

type EnemyTileProps = {
    enemyNum: number;
}

const EnemyTile:React.FC<EnemyTileProps> = ({ enemyNum }) => {
    // useEffect(() => {
    //     WebFont.load({
    //         google: {
    //             families: ['Pirata One', 'sans-serif']
    //         }
    //     });
    // }, []);

    return (
        <>
            <div className="grid max-h-1/2 max-w-1/2 bg-white justify-center items-center self-center">
                hello
            </div>
        </>
    )
}


export default EnemyTile;