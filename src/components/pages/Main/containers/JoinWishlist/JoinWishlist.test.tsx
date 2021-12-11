import React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import JoinWishlist from './JoinWishlist';

configure({ adapter: new Adapter() });

describe('<JoinWishlist>', () => {
	let wrapper: ShallowWrapper;

	beforeEach(() => {
		wrapper = shallow(<JoinWishlist></JoinWishlist>);
	});

	it('mounts without crashing', () => {
		wrapper.unmount();
	});
});
