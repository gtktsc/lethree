import times from 'lodash.times';
import tasks from './tasks';

export const createMockConstruction = id => ({
    id,
    name: `construction-${id}`,
    path: `path-${id}`,
    tasks
});

export default times(9, createMockConstruction);
