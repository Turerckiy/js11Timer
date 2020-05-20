class CountdownTimer {
  constructor({ selector, targetDate, dateInput }) {
    this.targetDate = targetDate;
    this.selector = document.querySelector(`${selector}`);
    this.days = document.querySelector('[ data-value="days"]');
    this.hours = document.querySelector('[ data-value="hours"]');
    this.mins = document.querySelector('[ data-value="mins"]');
    this.secs = document.querySelector('[ data-value="secs"]');
    this.input = dateInput;
    this.firstTimer();
    this.timer();
  }

  firstTimer() {
    const timeDelta = this.targetDate.getTime() - Date.now();
    if (Date.now() >= this.targetDate.getTime()) {
      this.calculation(0);

      return;
    }
    this.calculation(timeDelta);
  }

  timer() {
    // console.log(this.input);
    this.input = addEventListener("input", add);
    function add() {
      console.log("ww");
    }
    this.timerId = setInterval(() => {
      if (Date.now() >= this.targetDate.getTime()) {
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
      Math.floor((timeDelta % (time)) / (1000 * 60 * 60))
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
  targetDate: new Date("Jul 17,30049"),
  dateInput: document.querySelector("dateInput"),
});

// console.log(1000 * 60 * 60 * 24);
