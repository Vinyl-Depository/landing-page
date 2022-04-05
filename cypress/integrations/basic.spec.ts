describe('Smoke tests', () => {
	it('Application should render without crashing', () => {
		cy.visit('/');
	});

	it('Application should have the header renderer', () => {
		cy.visit('/').get('[data-test-id=header]').should('exist');
	});

	it('Application should have the footer renderer', () => {
		cy.visit('/').get('[data-test-id=footer]').should('exist');
	});

	it('Application should have the "intro" section renderer', () => {
		cy.visit('/').get('[data-test-id=intro-section]').should('exist');
	});

	it('Application should have the "typical marketplaces" section renderer', () => {
		cy.visit('/').get('[data-test-id=typical-marketplaces-section]').should('exist');
	});

	it('Application should have the "doing it" section renderer', () => {
		cy.visit('/').get('[data-test-id=doing-it-section]').should('exist');
	});

	it('Application should have the "doing it carousel" section renderer with first item', () => {
		cy.visit('/').get('[data-test-id=doing-it-carousel-first-item]').should('exist');
	});

	it('Application should have the "join wishlist" section renderer', () => {
		cy.visit('/').get('[data-test-id=join-wishlist-section]').should('exist');
	});

	it('Application should have the "seller" section renderer', () => {
		cy.visit('/').get('[data-test-id=seller-section]').should('exist');
	});

	it('Application should have the "doing it carousel" section renderer with first item but hidden on desktop view', () => {
		cy.visit('/').get('[data-test-id=doing-it-carousel-first-item]').should('not.be.visible');
	});

	it('Application should have the "doing it carousel" section renderer with first item but hidden on ipad view', () => {
		cy.visit('/')
			.viewport('ipad-2')
			.get('[data-test-id=doing-it-carousel-first-item]')
			.should('not.be.visible');
	});

	it('Application should have the "doing it carousel" section renderer with first item but visible on mobile view', () => {
		cy.visit('/')
			.viewport('iphone-6')
			.get('[data-test-id=doing-it-carousel-first-item]')
			.should('be.visible');
	});
});
