import { render } from 'enzyme';
import App from './index';

describe('init tests', () => {
    test('make sure tests run', () => {
        const app = render(App);
        expect(app).toMatchSnapshot();
    });
});
