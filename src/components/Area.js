import React from 'react';
import { Rectangle } from 'react-leaflet';

export default function Area({ index, setIndex, bounds }) {
    const mouseOver = () => {
        setIndex(index);
    };
    const mouseOut = () => {
        setIndex(-1);
    };

    return (
        <Rectangle
            bounds={bounds}
            pathOptions={{ color: 'white' }}
            eventHandlers={{ mouseover: mouseOver, mouseout: mouseOut }}
        />
    );
}
