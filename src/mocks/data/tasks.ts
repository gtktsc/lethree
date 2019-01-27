import times from 'lodash.times';
import slides from './slides';

export const createMockTasks = id => ({
    id,
    name: `task-${id}`,
    path: `path-${id}`,
    slides
});

export default times(4, createMockTasks);
