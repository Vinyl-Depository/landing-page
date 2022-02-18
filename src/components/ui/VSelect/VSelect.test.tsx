import React from 'react';
import { render } from '@testing-library/react';

import VSelect from './VSelect';

describe('<VSelect>', () => {
	it('Should render the component unchanged', () => {
		const { container } = render(
			<VSelect
				selectedIndex={0}
				placeholder="test"
				options={['test']}
				onSelectOption={() => {
					return;
				}}
			/>,
		);

		expect(container).toMatchSnapshot();
	});
});
