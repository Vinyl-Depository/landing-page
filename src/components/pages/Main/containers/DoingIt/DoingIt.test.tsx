import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DoingIt from './DoingIt';

configure({ adapter: new Adapter() });

describe('<DoingIt>', () => {
	let wrapper: ShallowWrapper;

	beforeEach(() => {
		wrapper = shallow(<DoingIt></DoingIt>);
	});

	it('mounts without crashing', () => {
		wrapper.unmount();
	});
});
