import React, { Suspense } from 'react';
import Fade from '@material-ui/core/Fade';
import Updater from 'components/updater';

import Spinner from 'components/spinner';
import Error from 'components/error';

const Route = ({ children, patchLocation }) => (
    <Error>
        {/* 
    // @ts-ignore - concurrent react */}
        <Suspense fallback={<Spinner />} delayMs={500}>
            <Fade timeout={500}>
                <Updater patchLocation={patchLocation}>{children}</Updater>
            </Fade>
        </Suspense>
    </Error>
);

export default Route;
