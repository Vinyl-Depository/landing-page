import React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Intro from './Intro';

configure({ adapter: new Adapter() });

describe('<Intro>', () => {
	let wrapper: ShallowWrapper;

	beforeEach(() => {
		wrapper = shallow(<Intro></Intro>);
	});

	it('mounts without crashing', () => {
		wrapper.unmount();
	});
});
