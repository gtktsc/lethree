import { INIT_APP_TYPE } from '../../actions/app/index';

const app = (state = {}, action) => {
    switch (action.type) {
        case INIT_APP_TYPE:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default app;
