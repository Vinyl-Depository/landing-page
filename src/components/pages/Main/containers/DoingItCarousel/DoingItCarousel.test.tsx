import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DoingItCarousel from './DoingItCarousel';

configure({ adapter: new Adapter() });

describe('<DoingItCarousel>', () => {
	let wrapper: ShallowWrapper;

	beforeEach(() => {
		wrapper = shallow(<DoingItCarousel></DoingItCarousel>);
	});

	it('mounts without crashing', () => {
		wrapper.unmount();
	});
});
