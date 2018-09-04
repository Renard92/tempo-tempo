export class Resource {

  static DEFAULT_RECOVERY_TIME: number = 300; /* 5 minutes */
  static DEFAULT_TOTAL_RESOURCES: number = 3;

  private _interval_id: number;
  private _timeout_id: number;
  private _timer_date: Date;

  private _recovery: number = Resource.DEFAULT_RECOVERY_TIME; /* in seconds */
  private _remaining: number = Resource.DEFAULT_TOTAL_RESOURCES;
  private _total: number = Resource.DEFAULT_TOTAL_RESOURCES;
  private _timer: number;
  private _running: boolean = false;

  constructor (resource: Resource = <Resource>{}) {
    this
      .withTotal(resource.total || Resource.DEFAULT_TOTAL_RESOURCES)
      .withRemaining(resource.remaining || Resource.DEFAULT_TOTAL_RESOURCES)
      .withRecovery(resource.recovery || Resource.DEFAULT_RECOVERY_TIME)
      .withTimer(resource.timer || Resource.DEFAULT_RECOVERY_TIME)
      .withRunning(resource.running || false);

    this._timer_date = new Date();

    if (this.running) {
      this.start();
    }
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
