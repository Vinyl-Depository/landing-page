import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Seller from './Seller';

configure({ adapter: new Adapter() });

describe('<Seller>', () => {
	let wrapper: ShallowWrapper;

	beforeEach(() => {
		wrapper = shallow(<Seller></Seller>);
	});

	it('mounts without crashing', () => {
		wrapper.unmount();
	});
});
