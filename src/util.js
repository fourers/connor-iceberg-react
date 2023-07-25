function calculateLongitude(shiftEast, baseLatitude, baseLongitude) {
    const lode = 69.172 * 1.6093;
    const toRads = Math.PI / 180;
    const oneDegreeLong = Math.cos(baseLatitude * toRads) * lode;
    const deltaLongitude = shiftEast / oneDegreeLong;
    const newLongitude = baseLongitude + deltaLongitude;
    return newLongitude;
}

function calculateLatitude(shiftNorth, baseLatitude) {
    const oneDegreeLat = 68.875 * 1.6093;
    const deltaLatitude = shiftNorth / oneDegreeLat;
    const newLatitude = baseLatitude + deltaLatitude;
    return newLatitude;
}

export function generateBounds(width, height) {
    const newLat = calculateLatitude(height / 5, 0);
    const newLong = calculateLongitude(width / 5, 0, 0);
    return [
        [-newLat, -newLong],
        [newLat, newLong],
    ];
}
