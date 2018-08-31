export class Resource {

  static DEFAULT_RECOVERY_TIME: number = 300; /* 5 minutes */
  static DEFAULT_TOTAL_RESOURCES: number = 3;

  private _interval_id: number;
  private _timeout_id: number;
  private _timer_date: Date;

  constructor (
    public recovery: number = Resource.DEFAULT_RECOVERY_TIME, /* in seconds */
    public remaining: number = Resource.DEFAULT_TOTAL_RESOURCES,
    public total: number = Resource.DEFAULT_TOTAL_RESOURCES,
    public timer?: number,
    public running: boolean = false
  ) {
    this._timer_date = new Date();
  }

  /**
   * Recovers every resources
   */
  recover () {
    this.stop();
    this.remaining = this.total;
  }

  /**
   * Removes one resource
   * @return {boolean}
   */
  remove (): boolean {
    if (this.remaining > 0) {
      this.remaining--;
      this.start();
      return true;
    }
    return false;
  }

  /**
   * Adds one resource
   * @param andResetTimer
   */
  add (andResetTimer: boolean = true) {
    if (this.remaining < this.total) {
      this.remaining++;
      if (this.remaining < this.total) {
        if (andResetTimer) {
          this.stop();
        }
        this.start();
      } else {
        this.stop();
      }
    }
  }

  /**
   * Starts the timer
   */
  private start () {
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

  /**
   * Stops the timer
   */
  private stop () {
    if (this.running) {
      clearInterval(this._interval_id);
      clearTimeout(this._timeout_id);
      this.timer = null;
    }
    this.running = false;
  }

  /**
   * @return timer {string} (mm:ss)
   */
  toString() {
    if (!this.timer) {
      return null;
    }

    this._timer_date.setMinutes((this.timer / 60));
    this._timer_date.setSeconds((this.timer % 60));
    return this._timer_date.toISOString().slice(14, 19);
  }

}
