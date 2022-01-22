import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Main from './Main';

configure({ adapter: new Adapter() });

describe('<Main>', () => {
	let wrapper: ShallowWrapper;

	beforeEach(() => {
		wrapper = shallow(<Main></Main>);
	});

	it('mounts without crashing', () => {
		wrapper.unmount();
	});
});
