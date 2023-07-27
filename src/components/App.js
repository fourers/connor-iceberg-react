import React from 'react';
import { MapContainer, ImageOverlay } from 'react-leaflet';
import './App.css';
import Atlas from './Atlas';
import EventHandlers from './EventHandlers';

const generateBounds = (width, height) => {
    const longitude = width / 500;
    const latitude = height / 500;
    return [
        [-latitude, -longitude],
        [latitude, longitude],
    ];
};

export default function App() {
    const width = 640;
    const height = 1143;
    const bounds = generateBounds(width, height);
    const maxBounds = generateBounds(width + 100, height + 300);
    const minZoom = 7.5;
    const maxZoom = 10;

    return (
        <MapContainer
            center={[0, 0]}
            zoom={minZoom}
            minZoom={minZoom}
            maxZoom={maxZoom}
            maxBounds={maxBounds}
            interactive
            zoomSnap={0.25}
        >
            <ImageOverlay url="iceberg.png" bounds={bounds} />
            <Atlas />
            <EventHandlers />
        </MapContainer>
    );
}
