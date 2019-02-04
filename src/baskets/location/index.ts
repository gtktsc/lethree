// interface Location {
//     project: string | null;
//     construction: string | null;
//     slide: string | null;
// }

// const defaultState: Location = {
//     project: null,
//     construction: null,
//     slide: null
// };

// const actions = {
//     setProject: (project: string) => (setState, getState): Location =>
//         setState({
//             ...getState(),
//             project
//         }),
//     setConstruction: (construction: string) => (setState, getState): Location =>
//         setState({ ...getState(), construction }),
//     setSlide: (slide: string) => (setState, getState): Location =>
//         setState({ ...getState(), slide }),
//     setLocation: (location: Location) => (setState, getState): Location => {
//         console.log('basket', { location });
//         return setState({ ...getState(), ...location });
//     }
// };

// export default { key: 'location', defaultState, actions };
