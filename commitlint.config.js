const commitRegex =
	/^(chore|ci|docs|feat|fix|perf|refactor|release|style|test): ((\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]) )?((\[((((?<!([A-Z]{1,10})-?)[A-Z]+-\d+)))\]) )?(([a-zA-Z0-9]+\s)*[a-zA-Z0-9]+)$/;

module.exports = {
	extends: ['@commitlint/config-conventional'],
	parserPreset: {
		parserOpts: {
			headerPattern: commitRegex,
		},
	},
};
