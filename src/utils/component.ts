export const concatClasses = (classes: { readonly [key: string]: string }, ...args: ReadonlyArray<string | null>) => {
	if (Object.keys(classes).length === 0) {
		return '';
	}

	return args.reduce<string>((finalClasses, className, index) => {
		if (!className || !(className in classes)) {
			return finalClasses;
		}

		if (index === 0) {
			return classes[className] as string;
		}

		return `${finalClasses} ${classes[className]}`;
	}, '');
};
