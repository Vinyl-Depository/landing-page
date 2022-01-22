import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TypicalMarketplaces from './TypicalMarketplaces';

configure({ adapter: new Adapter() });

describe('<TypicalMarketplaces>', () => {
	let wrapper: ShallowWrapper;

	beforeEach(() => {
		wrapper = shallow(<TypicalMarketplaces></TypicalMarketplaces>);
	});

	it('mounts without crashing', () => {
		wrapper.unmount();
	});
});
