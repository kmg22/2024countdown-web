const Day = document.querySelector('.DayNumber');
const Hour = document.querySelector('.HourNumber');
const Min = document.querySelector('.MinNumber');
const Sec = document.querySelector('.SecNumber');

const newYear = '1 Jan 2024';

function countdown() {
	const newYearDate = new Date(newYear);
	const currentDate = new Date();

	const totalseconds = (newYearDate - currentDate) / 1000;
	const days = Math.floor(totalseconds / 3600 / 24);
	const hours = Math.floor(totalseconds / 3600) % 24;
	const minutes = Math.floor(totalseconds / 60) % 60;
	const seconds = Math.floor(totalseconds) % 60;

	Day.innerHTML = days;
	Hour.innerHTML = hours;
	Min.innerHTML = minutes;
	changeColor(seconds);
}
function changeColor(seconds){
	if(seconds<=10){
		Sec.style.color='red';
		Sec.innerHTML = seconds;
	}
	else{
		Sec.style.color = 'black';
		Sec.innerHTML = seconds;
	}
}

countdown();
setInterval(countdown, 1000); // 1초 간 인터벌 주며 계속 실행
