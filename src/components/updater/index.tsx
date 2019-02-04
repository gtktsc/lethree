import locationExtracter from 'utils/location-extractor';

const LocationUpdater = ({ patchLocation, children }) => {
    if (typeof patchLocation === 'function') {
        const currentLocation =
            window && window.location && window.location.pathname;
        patchLocation(locationExtracter(currentLocation));
    }
    if (children) {
        return children;
    }
    return null;
};

export default LocationUpdater;
