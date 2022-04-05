const wrap = require('word-wrap');

const MAX_COMMIT_LINE_WIDTH = 72;
const MAX_SUBJECT_LENGTH = 70;
const MIN_SUBJECT_LENGTH = 3;
const JIRA_ID_REGEX = /((?<!([A-Z]{1,10})-?)[A-Z]+-\d+)/;

const wrapOptions = {
	indent: '',
	trim: true,
	width: MAX_COMMIT_LINE_WIDTH,
};

const commitTypes = [
	{
		description: 'Build process or auxiliary tool changes',
		emoji: '🤖',
		value: 'chore',
	},
	{
		description: 'CI related changes',
		emoji: '🚀',
		value: 'ci',
	},
	{
		description: 'Documentation only changes',
		emoji: '📘',
		value: 'docs',
	},
	{
		description: 'A new feature',
		emoji: '🔥',
		value: 'feat',
	},
	{
		description: 'A bug fix',
		emoji: '🐞',
		value: 'fix',
	},
	{
		description: 'A code change that improves performance',
		emoji: '⚡',
		value: 'perf',
	},
	{
		description: 'A code change that neither fixes a bug or adds a feature',
		emoji: '💡',
		value: 'refactor',
	},
	{
		description: 'Create a release commit',
		emoji: '🔖',
		value: 'release',
	},
	{
		description: 'Markup, white-space, formatting, missing semi-colons...',
		emoji: '🎨',
		value: 'style',
	},
	{
		description: 'Adding missing tests',
		emoji: '✅',
		value: 'test',
	},
];

const getJIRAIdFromBranch = (branchName) => {
	const matches = branchName.match(JIRA_ID_REGEX);

	if (matches) {
		return matches[0];
	}

	return null;
};

const findCommitTypeIndex = (type) => {
	const matchingIndex = commitTypes.findIndex(
		(item) => `${item.emoji} ${item.value}: ${item.description}` === type,
	);

	if (matchingIndex === -1) {
		return 0;
	}

	return matchingIndex;
};

module.exports = {
	questions({ gitInfo }) {
		const branchName = gitInfo.branch;
		const JIRAId = getJIRAIdFromBranch(branchName);
		const JIRAPrefix = JIRAId ? JIRAId.split('-')[0] : null;

		return [
			{
				type: 'list',
				name: 'type',
				message: "Select the type of change that you're commiting",
				choices: commitTypes.map((type) => `${type.emoji} ${type.value}: ${type.description}`),
			},
			{
				type: 'input',
				name: 'jira_id',
				message: `Type the JIRA ID - optional (ex. ${JIRAPrefix ?? 'VLP'}-12345):`,
				default: JIRAId,
				validate: (input) =>
					input.length === 0 || JIRA_ID_REGEX.test(input) || 'JIRA Id must be valid',
			},
			{
				type: 'limitedInput',
				name: 'subject',
				message: 'Write a short, imperative mood description of the change:\n',
				maxLength: MAX_SUBJECT_LENGTH - 3,
				filter: (input) => {
					let subject;

					subject = input.trim();
					while (subject.endsWith('.')) {
						subject = subject.substr(0, subject.length - 1).trim();
					}

					return subject;
				},
				validate: (input) =>
					input.length >= MIN_SUBJECT_LENGTH ||
					`The subject must have at least ${MIN_SUBJECT_LENGTH} characters`,
			},
			{
				message: 'Provide a longer description of the change:\n',
				name: 'body',
				type: 'input',
			},
		];
	},
	commitMessage({ answers }) {
		const commitMeta = answers.jira_id ? ` [${answers.jira_id}]` : '';
		const commitType = commitTypes[findCommitTypeIndex(answers.type)];

		return [
			`${commitType.value}: ${commitType.emoji}${commitMeta} ${answers.subject}`,
			wrap(answers.body, wrapOptions),
		].join('\n\n');
	},
};
