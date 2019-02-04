import { INIT_APP_TYPE, PATCH_LOCATION_TYPE } from '../../actions/app/index';

const app = (state = {}, action) => {
    switch (action.type) {
        case INIT_APP_TYPE:
        case PATCH_LOCATION_TYPE: {
            const newState = {
                ...state,
                ...action.payload
            };
            return newState;
        }
        default:
            return state;
    }
};

export default app;
