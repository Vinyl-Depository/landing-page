---
to: src/components/pages/<%= h.changeCase.pascalCase(pageName.toLowerCase()) %>/containers/<%= h.changeCase.pascalCase(containerName.toLowerCase()) %>/<%= h.changeCase.pascalCase(containerName.toLowerCase()) %>.test.tsx
---
<% name = containerName.toLowerCase() %>import React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import <%= h.changeCase.pascalCase(name) %> from './<%= h.changeCase.pascalCase(name) %>';

configure({ adapter: new Adapter() });

describe('<<%= h.changeCase.pascalCase(name) %>>', () => {
	let wrapper: ShallowWrapper;

	beforeEach(() => {
		wrapper = shallow(<<%= h.changeCase.pascalCase(name) %>></<%= h.changeCase.pascalCase(name) %>>);
	});

	it('mounts without crashing', () => {
		wrapper.unmount();
	});
});
