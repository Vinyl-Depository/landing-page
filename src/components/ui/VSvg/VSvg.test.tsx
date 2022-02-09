import { render } from '@testing-library/react';

import VSvg from './VSvg';

describe('<VSvg>', () => {
	it('Should render the component unchanged', () => {
		const { container } = render(<VSvg name="arrowDown" />);

		expect(container).toMatchSnapshot();
	});
});
