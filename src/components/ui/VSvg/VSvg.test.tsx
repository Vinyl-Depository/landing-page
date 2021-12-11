import React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import VSvg from './VSvg';

configure({ adapter: new Adapter() });

describe('<VSvg>', () => {
	let wrapper: ShallowWrapper;

	beforeEach(() => {
		wrapper = shallow(<VSvg></VSvg>);
	});

	it('mounts without crashing', () => {
		wrapper.unmount();
	});
});
