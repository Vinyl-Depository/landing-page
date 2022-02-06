/**
 * The function returns the mapped class names list
 * @param classes The object of classes mapping
 * @param firstClass The first class to be used
 * @param args The list of classes to get mapped
 * @returns THe result string of the class names
 */
export const concatClasses = (
	classes: { readonly [key: string]: string },
	firstClass: string | null,
	...args: ReadonlyArray<string | null>
) => {
	if (Object.keys(classes).length === 0) {
		return '';
	}

	const allClasses = [firstClass, ...args];

	return allClasses.reduce<string>((finalClasses, className, index) => {
		if (!className || !(className in classes)) {
			return finalClasses;
		}

		if (index === 0) {
			return classes[className] as string;
		}

		return `${finalClasses} ${classes[className]}`;
	}, '');
};
