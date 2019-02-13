import times from 'lodash.times';
import constructions from './construction';

export const createMockProject = id => ({
    id,
    name: `project-${id}`,
    url: `url-${id}`,
    constructions
});

export default times(9, createMockProject);
