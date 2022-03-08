const startedDayDate = new Date('2022-03-03').getDate();
const startedMonthDate = new Date('2022-03-03').getMonth() + 1;

const currentDayDate = new Date().getDate();
const currentMonthDate = new Date().getMonth() + 1;

// Coutner increased every day in the number of days that have been passed since the beginning of the count multiplied 17.
//Counter set up every day anew.
let counter = ((currentMonthDate - startedMonthDate) * 30 + (currentDayDate - startedDayDate)) * 17;

export const updateCounter = () => {
	counter += 17;

	return counter;
};
