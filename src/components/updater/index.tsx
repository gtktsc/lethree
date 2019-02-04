import locationExtracter from 'utils/location-extractor';

const LocationUpdater = ({ patchLocation }) => {
    if (typeof patchLocation === 'function') {
        const currentLocation =
            window && window.location && window.location.pathname;
        patchLocation(locationExtracter(currentLocation));
    }

    return null;
};

export default LocationUpdater;
