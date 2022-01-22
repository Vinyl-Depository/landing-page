import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HeaderOne from './Header';

configure({ adapter: new Adapter() });

describe('<HeaderOne>', () => {
	let wrapper: ShallowWrapper;

	beforeEach(() => {
		wrapper = shallow(<HeaderOne></HeaderOne>);
	});

	it('mounts without crashing', () => {
		wrapper.unmount();
	});
});
