import times from 'lodash.times';

export const createMockSlides = id => ({
    id,
    name: `task-${id}`,
    path: `path-${id}`
});

export default times(10, createMockSlides);
