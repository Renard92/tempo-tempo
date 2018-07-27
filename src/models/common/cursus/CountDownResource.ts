export class CountDownResource {

  static DEFAULT_RECOVERY: number = 300; /* 5 minutes */
  static DEFAULT_TOTAL: number = 8;

  private _interval_id: number;
  private _timeout_id: number;

  private _timer_date: Date;

  constructor (
    public recovery: number = CountDownResource.DEFAULT_RECOVERY, /* in seconds */
    public remaining: number = CountDownResource.DEFAULT_TOTAL,
    public total: number = CountDownResource.DEFAULT_TOTAL,
    public timer?: number,
    public running: boolean = false
  ) {
    this._timer_date = new Date();
  }

  remove () {
    if (this.remaining > 0) {
      this.remaining--;
      this.start();
    }
  }

  add (resetTimer: boolean = true) {
    if (this.remaining < this.total) {
      this.remaining++;
      if (this.remaining < this.total) {
        if (resetTimer) {
          this.stop();
        }
        this.start();
      } else {
        this.stop();
      }
    }
  }

  start () {
    if (!this.running && this.remaining < this.total) {
      this.timer = this.recovery;

      this._interval_id = setInterval(() => {
        this.timer--;
      }, 1000);

      this._timeout_id = setTimeout(() => {
        this.add();
      }, this.recovery * 1000);
    }
    this.running = true;
  }

  stop () {
    if (this.running) {
      clearInterval(this._interval_id);
      clearTimeout(this._timeout_id);
      this.timer = null;
    }
    this.running = false;
  }

  /**
   * @return timer {number} (mm:ss)
   */
  getFormattedTimer() {
    if (!this.timer) {
      return null;
    }

    this._timer_date.setMinutes((this.timer / 60));
    this._timer_date.setSeconds((this.timer % 60));
    return this._timer_date.toISOString().slice(14, 19);
  }

}
