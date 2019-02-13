import { cloneElement } from 'react';

import locationExtracter from 'utils/location-extractor';

const LocationUpdater = ({ patchLocation, children }) => {
    const currentUrl = window && window.location && window.location.pathname;

    const currentLocation = locationExtracter(currentUrl);

    if (typeof patchLocation === 'function') {
        patchLocation(currentLocation);
    } else {
        throw new Error('cannot patch location');
    }

    if (children) {
        return cloneElement(children, { location: currentLocation });
    }
    throw new Error('cannot create element');
};

export default LocationUpdater;
