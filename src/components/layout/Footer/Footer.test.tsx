import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Footer from './Footer';

configure({ adapter: new Adapter() });

describe('<Footer>', () => {
	let wrapper: ShallowWrapper;

	beforeEach(() => {
		wrapper = shallow(<Footer></Footer>);
	});

	it('mounts without crashing', () => {
		wrapper.unmount();
	});
});
