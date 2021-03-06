class CountdownTimer {
  constructor({ selector, targetDate })  {
  this.targetDate = targetDate;
  this.selector = document.querySelector(`${selector}`);
  this.days =  this.selector.querySelector('[ data-value="days"]');
  this.hours =  this.selector.querySelector('[ data-value="hours"]');
  this.mins =  this.selector.querySelector('[ data-value="mins"]');
  this.secs =  this.selector.querySelector('[ data-value="secs"]');
  this.firstTimer();
  this.timer();
  };

  firstTimer() {
    const timeDelta = this.targetDate - Date.now();
    if (Date.now() >= this.targetDate) {
      this.calculation(0);
      return;
    }
    this.calculation(timeDelta);
  }

  timer() {
    // console.log(this.input);
    this.input = addEventListener("input", add);
    function add() {}
    this.timerId = setInterval(() => {
      if (Date.now() >= this.targetDate) {
        clearInterval(this.timerId);
        return;
      }
      this.firstTimer();
    }, 1000);
  }
  calculation(timeDelta) {
    const time = 1000 * 60 * 60 * 24; 
    this.days.textContent = this.pad(
      Math.floor(timeDelta / (time))
    );
    this.hours.textContent = this.pad(
      Math.floor((timeDelta % (time)) / (time/24))
    );
    this.mins.textContent = this.pad(
      Math.floor((timeDelta % (time/24)) / (1000 * 60))
    );
    this.secs.textContent = this.pad(
      Math.floor((timeDelta % (time/60/24)) / 1000)
    );
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}
{
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
}
new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 3020"),
  // dateInput: document.querySelector("dateInput"),
});

// console.log(1000 * 60 * 60 * 24);
