// stores/machine.js
import { defineStore } from "pinia";

export const useMachineStore = (machineId) => {
  return defineStore(`machine-${machineId}`, {
    state: () => ({
      id: machineId,
      time: 0, // Initial countdown time in seconds
      available: true,
      countdown: 0, // Remaining countdown time in seconds
      countdownInterval: null,
      countTimeout: null,
      isPaused: false,
      endTime: null, // Timestamp
    }),
    getters: {
      // Getter to format countdown in mm:ss
      formattedCountdown() {
        const minutes = Math.floor(this.countdown / 60)
          .toString()
          .padStart(2, "0");
        const seconds = (this.countdown % 60).toString().padStart(2, "0");
        return `${minutes}:${seconds}`;
      },
      status() {
        return this.available;
      },
    },
    actions: {
      startCountdown(duration) {
        this.time = duration;
        this.countdown = duration;
        this.available = false;
        this.isPaused = false;

        // Calculate and store the end time
        const now = Date.now();
        this.endTime = now + duration * 1000;
        localStorage.setItem(
          `machine-${this.id}-endTime`,
          JSON.stringify({
            timesEnd: this.endTime,
            isPause: false,
            timeLeft: this.countdown,
          })
        );

        // Start counting
        this.countdownInterval = setInterval(this.updateCountdown, 1000);
      },
      updateCountdown() {
        const now = Date.now();
        if (this.endTime && now < this.endTime) {
          this.countdown = Math.ceil((this.endTime - now) / 1000);
        } else {
          this.clearCountdown();
          this.available = true;
        }
      },
      // Clear countdown
      clearCountdown() {

        localStorage.removeItem(`machine-${this.id}-endTime`);
        clearInterval(this.countdownInterval);
        this.countdownInterval = null;

        this.available = true;
        this.countdown = 0;
        this.isPaused = false;
      },
      pauseCoutdown() {
        this.isPaused = true;
        // Clear for stop counting
        clearInterval(this.countdownInterval);
        this.countdownInterval = null;

        const now = Date.now();
        this.endTime = now + this.countdown * 1000;


        localStorage.setItem(
          `machine-${this.id}-endTime`,
          JSON.stringify({
            timesEnd: this.endTime,
            isPause: true,
            timeLeft: this.countdown,
          })
        );

        // clearTimeout(this.countTimeout)
      },
      // Load countdown on store initialization
      initializeCountdown() {
        // Get data from local storage
        const savedEndTime = localStorage.getItem(`machine-${this.id}-endTime`);
        if (savedEndTime) {
          const localData = JSON.parse(savedEndTime);
          this.available = false;
          // Cheack if it didn't pasuse
          if (!localData.isPause) {
            // set endTime for use in updateCountdown()
            this.endTime = parseInt(localData.timesEnd, 10);
            // Continue countdown
            this.countdownInterval = setInterval(this.updateCountdown, 1000);
          } else {
            // If it paused
            // set endTime for use in updateCountdown()
            const now = Date.now();
            this.endTime = now + localData.timeLeft * 1000;

            //Set for continue pause
            this.isPaused = true;
            this.countdown = localData.timeLeft;
          }
        }
      },
    },
  })();
};
