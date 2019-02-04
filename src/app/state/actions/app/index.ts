interface INIT_APP_PAYLOAD {
    project: string | null;
    slides: string | null;
    constructor: string | null;
    baseUrl: string;
}

export const INIT_APP_TYPE: 'INIT_APP' = 'INIT_APP';

interface InitApp {
    type: typeof INIT_APP_TYPE;
    payload: INIT_APP_PAYLOAD;
}

export const initApp = (payload: INIT_APP_PAYLOAD) => ({
    type: INIT_APP_TYPE,
    payload
});
