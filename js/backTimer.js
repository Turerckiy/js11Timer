
class CountdownTimer {
  constructor({ selector, targetDate })  {
  this.targetDate = targetDate;
  this.selector = document.querySelector(`${selector}`);
  this.days =  document.querySelector('[ data-value="days"]');
  this.hours =  document.querySelector('[ data-value="hours"]');
  this.mins =  document.querySelector('[ data-value="mins"]');
  this.secs =  document.querySelector('[ data-value="secs"]');
  this.firstTimer();
  this.timer();
  };
    
  firstTimer() {
    const timeDelta = this.targetDate.getTime() - Date.now();
    if (Date.now() >= this.targetDate.getTime()) {
      this.calculation(0)
      return
    }
    this.calculation(timeDelta);
  }

timer() {
  this.timerId = setInterval(() => {
    if (Date.now() >= this.targetDate.getTime()) {
      clearInterval(this.timerId);
      return
    }
    this.firstTimer();
  }, 1000);
}
calculation(timeDelta) {
  this.days.textContent = this.pad(Math.floor(timeDelta / (1000 * 60 * 60 * 24)));
  this.hours.textContent = this.pad(Math.floor((timeDelta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  this.mins.textContent = this.pad(Math.floor((timeDelta % (1000 * 60 * 60)) / (1000 * 60)));
  this.secs.textContent = this.pad(Math.floor((timeDelta % (1000 * 60)) / 1000));
}

pad(value) {
  return String(value).padStart(2, '0');
}
}
//  calcTime(timeDelta) {
//   this.days.textContent = this.pad(Math.floor(timeDelta / (1000 * 60 * 60 * 24)));
//   this.hours.textContent = this.pad(Math.floor((timeDelta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//   this.mins.textContent = this.pad(Math.floor((timeDelta % (1000 * 60 * 60)) / (1000 * 60)));
//   this.secs.textContent = this.pad(Math.floor((timeDelta % (1000 * 60)) / 1000));
//   // refs.days.textContent = `${days}`;
//   // refs.hours.textContent = hours;
//   // refs.mins.textContent = mins;
//   // refs.secs.textContent = `${secs}`;
// }

// function pad(value) {
//   return String(value).padStart(2, '0');
//   }


// '3'
// https://github.com/goitacademy/javascript-homework/tree/master/homework-11/timer

// Плагин ожидает следующую HTML-разметку и показывает четыре цифры: дни, часы, минуты и секунды в формате XX:XX:XX:XX. Количество дней может состоять из более чем двух цифр.


// Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.
new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2020'),
});