/**
 * The function returns a random integer between first input to the second one
 * @param min Min number to randomise
 * @param max Max number to randomise
 * @returns Number between the the min input and to the max input
 */
export const randomNumber = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min)) + min + 1;
};
