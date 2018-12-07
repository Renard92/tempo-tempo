export class CountDownResource {

  static DEFAULT_RECOVERY_TIME: number = 120; /* 2 minutes */
  static DEFAULT_TOTAL_RESOURCES: number = 3;

  private _interval_id: number;
  private _timeout_id: number;
  private _timer_date: Date;

  private _recovery: number = CountDownResource.DEFAULT_RECOVERY_TIME; /* in seconds */
  private _remaining: number = CountDownResource.DEFAULT_TOTAL_RESOURCES;
  private _total: number = CountDownResource.DEFAULT_TOTAL_RESOURCES;
  private _timer: number;
  private _running: boolean = false;

  constructor (resource: CountDownResource = <CountDownResource>{}) {
    this._timer_date = new Date();
    this
      .withTotal(resource.total || CountDownResource.DEFAULT_TOTAL_RESOURCES)
      .withRemaining(resource.remaining || CountDownResource.DEFAULT_TOTAL_RESOURCES)
      .withRecovery(resource.recovery || CountDownResource.DEFAULT_RECOVERY_TIME)
      .withTimer(resource.timer || 0)
      .withRunning(false)
      .start();
  }

  get recovery(): number {
    return this._recovery;
  }

  set recovery(value: number) {
    this._recovery = value;
  }

  get remaining(): number {
    return this._remaining;
  }

  set remaining(value: number) {
    this._remaining = value;
  }

  get total(): number {
    return this._total;
  }

  set total(value: number) {
    this._total = value;
  }

  get timer(): number {
    return this._timer;
  }

  set timer(value: number) {
    this._timer = value;
  }

  get running(): boolean {
    return this._running;
  }

  set running(value: boolean) {
    this._running = value;
  }

  withTimer (value: number) {
    this.timer = value;
    return this;
  }

  withRecovery (value: number) {
    this.recovery = value;
    return this;
  }

  withRemaining (value: number) {
    this.remaining = value;
    return this;
  }

  withTotal (value: number) {
    this.total = value;
    return this;
  }

  withRunning (value: boolean) {
    this.running = value;
    return this;
  }

  /**
   * Recovers every resources
   */
  recover (): CountDownResource {
    this.stop();
    this.remaining = this.total;
    return this;
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
          this.timer = null;
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
  private start (): CountDownResource {
    if (!this.running && this.remaining < this.total) {
      if (!this.timer) {
        this.timer = this.recovery;
      }

      this._interval_id = setInterval(() => {
        this.timer--;
      }, 1000);

      this._timeout_id = setTimeout(() => {
        this.add();
      }, this.timer * 1000);

      this.running = true;
    }
    return this;
  }

  /**
   * Stops the timer
   */
  private stop (): CountDownResource {
    if (this.running) {
      clearInterval(this._interval_id);
      clearTimeout(this._timeout_id);
    }
    this.running = false;
    return this;
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
