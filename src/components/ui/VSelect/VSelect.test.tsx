import React from 'react';
import { render } from '@testing-library/react';

import VSelect from './VSelect';

describe('<VSelect>', () => {
	it('Should render the component unchanged', () => {
		const { container } = render(<VSelect placeholder="test" options={['test']} />);

		expect(container).toMatchSnapshot();
	});
});
