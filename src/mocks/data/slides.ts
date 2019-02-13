import times from 'lodash.times';

export const createMockSlides = id => ({
    id,
    name: `slide-${id}`,
    path: `path-${id}`
});

export default times(10, createMockSlides);
