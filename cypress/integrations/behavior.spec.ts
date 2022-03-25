describe('Behavior tests', () => {
	it('(Intro Section): Should have intro input with the entered text', () => {
		cy.visit('/')
			.get('[data-test-id=intro-input]')
			.type('DUMMY_EMAIL')
			.should('have.value', 'DUMMY_EMAIL');
	});

	it('(Intro Section): Should display failure validation message when submitting invalid email input - and email is non empty', () => {
		cy.visit('/')
			.get('[data-test-id=intro-input]')
			.type('DUMMY_EMAIL')
			.get('[data-test-id=intro-form]')
			.submit()
			.get('[data-test-id=intro-validation-message]')
			.should('be.visible')
			.and('satisfy', ($element: JQuery) => {
				const classList = ($element.attr('class') ?? '').split(/\s+/);

				return classList.some((className) => className.includes('validationMessageError'));
			})
			.get('[data-test-id=intro-input]')
			.should('have.value', 'DUMMY_EMAIL');
	});

	it('(Intro Section): Should display success validation message when submitting valid email input and successfully subscribed - and clear the input', () => {
		cy.intercept('POST', '/api/subscribe', {
			statusCode: 200,
			body: {
				success: true,
				message: 'Successfully fulfilled subscription action',
			},
		});

		cy.visit('/')
			.get('[data-test-id=intro-input]')
			.type('dummy@email.com')
			.get('[data-test-id=intro-form]')
			.submit()
			.get('[data-test-id=intro-validation-message]')
			.should('be.visible')
			.and('satisfy', ($element: JQuery) => {
				const classList = ($element.attr('class') ?? '').split(/\s+/);

				return classList.some((className) => className.includes('validationMessageSuccess'));
			})
			.get('[data-test-id=intro-input]')
			.should('have.value', '');
	});

	it('(Intro Section): Should display failure validation message when submitting valid email input and failed to subscribe', () => {
		cy.intercept('POST', '/api/subscribe', {
			statusCode: 500,
			body: {
				success: false,
				message: 'ERROR',
			},
		});

		cy.visit('/')
			.get('[data-test-id=intro-input]')
			.type('dummy@email.com')
			.get('[data-test-id=intro-form]')
			.submit()
			.get('[data-test-id=intro-validation-message]')
			.should('be.visible')
			.and('satisfy', ($element: JQuery) => {
				const classList = ($element.attr('class') ?? '').split(/\s+/);

				return classList.some((className) => className.includes('validationMessageError'));
			})
			.get('[data-test-id=intro-input]')
			.should('have.value', 'dummy@email.com');
	});

	it('(Join Wishlist Section): Should have intro input with the entered text', () => {
		cy.visit('/')
			.get('[data-test-id=join-wishlist-input]')
			.type('DUMMY_EMAIL')
			.should('have.value', 'DUMMY_EMAIL');
	});

	it('(Join Wishlist Section): Should display failure validation message when submitting invalid email input - and email is non empty', () => {
		cy.visit('/')
			.get('[data-test-id=join-wishlist-input]')
			.type('DUMMY_EMAIL')
			.get('[data-test-id=join-wishlist-form]')
			.submit()
			.get('[data-test-id=join-wishlist-validation-message]')
			.should('be.visible')
			.and('satisfy', ($element: JQuery) => {
				const classList = ($element.attr('class') ?? '').split(/\s+/);

				return classList.some((className) => className.includes('validationMessageError'));
			})
			.get('[data-test-id=join-wishlist-input]')
			.should('have.value', 'DUMMY_EMAIL');
	});

	it('(Join Wishlist Section): Should display success validation message when submitting valid email input and successfully subscribed - and clear the input', () => {
		cy.intercept('POST', '/api/subscribe', {
			statusCode: 200,
			body: {
				success: true,
				message: 'Successfully fulfilled subscription action',
			},
		});

		cy.visit('/')
			.get('[data-test-id=join-wishlist-input]')
			.type('dummy@email.com')
			.get('[data-test-id=join-wishlist-form]')
			.submit()
			.get('[data-test-id=join-wishlist-validation-message]')
			.should('be.visible')
			.and('satisfy', ($element: JQuery) => {
				const classList = ($element.attr('class') ?? '').split(/\s+/);

				return classList.some((className) => className.includes('validationMessageSuccess'));
			})
			.get('[data-test-id=join-wishlist-input]')
			.should('have.value', '');
	});

	it('(Join Wishlist Section): Should display failure validation message when submitting valid email input and failed to subscribe', () => {
		cy.intercept('POST', '/api/subscribe', {
			statusCode: 500,
			body: {
				success: false,
				message: 'ERROR',
			},
		});

		cy.visit('/')
			.get('[data-test-id=join-wishlist-input]')
			.type('dummy@email.com')
			.get('[data-test-id=join-wishlist-form]')
			.submit()
			.get('[data-test-id=join-wishlist-validation-message]')
			.should('be.visible')
			.and('satisfy', ($element: JQuery) => {
				const classList = ($element.attr('class') ?? '').split(/\s+/);

				return classList.some((className) => className.includes('validationMessageError'));
			})
			.get('[data-test-id=join-wishlist-input]')
			.should('have.value', 'dummy@email.com');
	});
});
