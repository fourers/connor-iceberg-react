import React from 'react';
import { MapContainer, ImageOverlay } from 'react-leaflet';
import './App.css';
import { generateBounds } from '../util';

const App = () => {
    const width = 640;
    const height = 1143;
    const bounds = generateBounds(width, height);
    const maxBounds = generateBounds(width, height + 300);


    return (
        <MapContainer
            center={[0, 0]}
            zoom={8}
            minZoom={8}
            maxZoom={10}
            maxBounds={maxBounds}
            interactive={true}
            zoomSnap={0.25}
        >
            <ImageOverlay
                url='/iceberg.png'
                bounds={bounds}
            />
        </MapContainer>
    );
};

export default App;
