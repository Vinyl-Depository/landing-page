/**
 * The function return a rendom integer between first input to the second one
 * @param min First number in range
 * @param max Last number in range
 * @returns number between the the min input and to the max input
 */
export const randomNumber = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min)) + min + 1;
};
