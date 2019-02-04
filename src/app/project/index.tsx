import React from 'react';
import locationExtractor from 'utils/location-extractor';

const Project = ({ match }) => {
    const currentLocation = locationExtractor(match.url);
    console.log({ currentLocation });
    return (
        <div>
            <h1>My counter</h1>
            {({ location, setLocation }) => (
                <div>
                    {console.log({ location })}
                    <button onClick={setLocation(currentLocation)}>+</button>
                </div>
            )}
            {'test'}
        </div>
    );
};

export default Project;
