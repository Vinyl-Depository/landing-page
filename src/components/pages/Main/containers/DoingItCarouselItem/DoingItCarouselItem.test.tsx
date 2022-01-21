import React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DoingItCarouselItem from './DoingItCarouselItem';

configure({ adapter: new Adapter() });

describe('<DoingItCarouselItem>', () => {
	let wrapper: ShallowWrapper;

	beforeEach(() => {
		wrapper = shallow(<DoingItCarouselItem></DoingItCarouselItem>);
	});

	it('mounts without crashing', () => {
		wrapper.unmount();
	});
});
