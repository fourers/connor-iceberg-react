import { useMapEvents } from 'react-leaflet';

export default function EventHandlers() {
    useMapEvents({
        click(event) {
            console.log(`[${event.latlng.lat}, ${event.latlng.lng}]`);
        },
        boxzoomend(event) {
            console.log(
                JSON.stringify(
                    {
                        description: '',
                        corner1: [
                            event.boxZoomBounds._northEast.lat,
                            event.boxZoomBounds._northEast.lng,
                        ],
                        corner2: [
                            event.boxZoomBounds._southWest.lat,
                            event.boxZoomBounds._southWest.lng,
                        ],
                    },
                    null,
                    '\t',
                ),
            );
        },
    });
    return null;
}
