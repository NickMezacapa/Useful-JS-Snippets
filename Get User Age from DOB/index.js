/* 

Get User Age given predefined DOB (month day, year).
Use of constructor funciton save and access data

*/

const user = {
	name: "Nick",
	DOB: "March 2, 1998",
	getAge() {
		let msBtwDOBand1970 = Date.parse(this.DOB); // milliseconds between user DOB and 1970
		let msBtwNowand1970 = Date.now(); // milliseconds between now and 1970
		let ageInMs = msBtwNowand1970 - msBtwDOBand1970; // Get age in terms of milliseconds

		let ms = ageInMs;
		let second = 1000; // 1000 ms in 1 second
		let minute = second * 60; // 60 seconds in 1 minute
		let hour = minute * 60;
		let day = hour * 24;
		let month = day * 30; // Using 30 as ana average for months days
		let year = day * 365;

		let yearsOld = Math.round(ms / year);
		return yearsOld;
	},
};
console.log(user.getAge());

/* 
We are using a specific method that gets the passed milliseconds of a specific date to or from 1970.

We then write up some conversions and save to variables to calculate the time in ms that has passed, then convert ms to years.
*/
