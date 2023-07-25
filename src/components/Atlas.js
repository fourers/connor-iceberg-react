import React, { useState } from 'react';
import Area from './Area';
import './Atlas.css';
import data from '../data.json';

export default function Atlas() {
    const [index, setIndex] = useState(-1);

    const getDescription = (currentIndex) => {
        if (currentIndex in data) {
            return data[currentIndex].description;
        }
        return 'Hover over something';
    };

    return (
        <>
            <div className="info leaflet-top leaflet-right">
                <h4>Connor Iceberg Atlas</h4>
                <p>{getDescription(index)}</p>
            </div>
            {data.map((areaData, dataIndex) => {
                return (
                    <Area
                        key={dataIndex}
                        index={dataIndex}
                        setIndex={setIndex}
                        bounds={[areaData.corner1, areaData.corner2]}
                    />
                );
            })}
        </>
    );
}
