import React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import RecommenderApp from './RecommenderApp';

configure({ adapter: new Adapter() });

describe('<RecommenderApp>', () => {
	let wrapper: ShallowWrapper;

	beforeEach(() => {
		wrapper = shallow(<RecommenderApp></RecommenderApp>);
	});

	it('mounts without crashing', () => {
		wrapper.unmount();
	});
});
