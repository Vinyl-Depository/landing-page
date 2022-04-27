import { Config } from 'inflint';

const inflintConfig: Config = {
	aliases: {
		'[UIComponent]': `V([A-Z][a-z0-9]+)((\d)|([A-Z0-9][a-z0-9]+))*([A-Z])?`,
		'[SpecTest]': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*.spec$',
	},
	rules: {
		'.github/**/*.yml': [2, { onlyFiles: true }],
		'cypress/integrations/**/*': [2, '[SpecTest]'],
		'public/images/**/*': [2, 'kebab-case'],
		'src/{utils,styles,models,hooks,data,i18n,pages}/**/*': [2, 'kebab-case'],
		'tests/**/*': [2, 'kebab-case.point'],
		'src/components/ui/**/*.tsx': [2, '[UIComponent]'],
		'src/components/{containers,layout}/*.tsx': [2, 'PascalCase.Point'],
		'src/components/**/*.ts': [2, '^index$'],
		'src/{components,styles}/**/*.css': 2,
		'src/{src,tests,cypress}/**/*.js': 2,
	},
};

export default inflintConfig;
