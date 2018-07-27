export class CountDownResource {

  duration: number; /* in seconds */
  remaining: number;
  total: number;
  running: boolean;

  constructor (duration: number, remaining: number, total: number, running: boolean) {
    this.duration = duration;
    this.remaining = remaining;
    this.total = total;
    this.running = running;
  }

  remove () {
    this.remaining--;
    this.running = true;
  }

  add () {
    this.remaining++;
    if (this.remaining === this.total) {
      this.stop();
    }
  }

  start () {
    if (!this.running) {

    }
    this.running = true;
  }

  stop () {
    if (this.running) {

    }
    this.running = false;
  }

}
