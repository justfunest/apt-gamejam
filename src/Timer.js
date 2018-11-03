class Timer {
  constructor(duration) {
    this.duration = duration
  }

  start(time) {
    this.startTime = time
  }

  update(time, delta) {
    this.time = time
  }

  elapsed() {
    // BUG
    if (!this.startTime) {
      this.startTime = this.time
    }
    return this.time - this.startTime
  }
}

export default Timer