import times from 'lodash.times';
import tasks from './tasks';

export const createMockConstruction = id => ({
    id,
    name: `project-${id}`,
    path: `path-${id}`,
    tasks
});

export default times(9, createMockConstruction);
