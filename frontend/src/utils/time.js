const dayOfWeek = (timestamp) => {
	return {
		0: 'Sun',
		1: 'Mon',
		2: 'Tue',
		3: 'Wed',
		4: 'Thu',
		5: 'Fri',
		6: 'Sat',
	}[new Date(timestamp * 1000).getDay()]
}

const timeStampToEasyTime = (timestamp) => {
	var datetime = new Date(timestamp * 1000);

	// separate vars just to check
	const today = new Date().setHours(0, 0, 0, 0);
	const thatDay = new Date(timestamp * 1000).setHours(0, 0, 0, 0);
	
	if (today === thatDay){
		// just return time like 5:39 PM
		const time = datetime.toLocaleTimeString("en-US")
		return `${time.split(':').slice(0, 2).join(":")} ${time.split(' ')[1]}`
	}
	// return day (prefixed with day of week), and remove time
	return `${dayOfWeek(timestamp)} ${datetime.toLocaleDateString("en-US").split(',')[0]}`;
}

const timeStampToFullTime = (timestamp) => {
	var datetime = new Date(timestamp * 1000);
	return `${dayOfWeek(timestamp)} ${datetime.toLocaleString("en-US")}`;
}

export {
    timeStampToEasyTime,
    timeStampToFullTime,
    dayOfWeek,
}

