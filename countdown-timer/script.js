const newYear = '1 Jan 2021';
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minsElement = document.getElementById('mins');
const secondsElement = document.getElementById('seconds');

const countdown = () => {
  const currentDate = new Date();
  const newYearDate = new Date(newYear);

  const seconds = (newYearDate - currentDate) / 1000;

  const days = Math.floor(seconds / (24 * 3600))
  const hours = Math.floor(seconds / 3600 - days * 24);
  const mins = Math.floor(seconds / 60 - days * 24 * 60 - hours * 60);
  const second = Math.floor(seconds - days * 24 * 3600 - hours * 3600 - mins * 60);

  daysElement.innerHTML = days;
  hoursElement.innerHTML = formatTime(hours);
  minsElement.innerHTML = formatTime(mins);
  secondsElement.innerHTML = formatTime(second);

  if (currentDate === newYearDate) {
    clearInterval(setIntervalTime);
  }
};

const formatTime = time => {
  return time < 10 ? `0${time}` : time;
}

const setIntervalTime = setInterval(countdown, 1000);

countdown();