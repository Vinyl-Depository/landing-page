---
to: src/components/ui/V<%= h.changeCase.pascalCase(name.toLowerCase()) %>/V<%= h.changeCase.pascalCase(name.toLowerCase()) %>.test.tsx
---
<% name = name.toLowerCase() %>import React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import V<%= h.changeCase.pascalCase(name) %> from './V<%= h.changeCase.pascalCase(name) %>';

configure({ adapter: new Adapter() });

describe('<V<%= h.changeCase.pascalCase(name) %>>', () => {
	let wrapper: ShallowWrapper;

	beforeEach(() => {
		wrapper = shallow(<V<%= h.changeCase.pascalCase(name) %>></V<%= h.changeCase.pascalCase(name) %>>);
	});

	it('mounts without crashing', () => {
		wrapper.unmount();
	});
});
