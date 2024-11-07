// stores/machine.js
import { defineStore } from 'pinia'

export const useMachineStore = (machineId) => {
    return defineStore(`machine-${machineId}`, {
        state: () => ({
            id: machineId,
            time: 0,          // Initial countdown time in seconds
            available: true,  
            countdown: 0,     // Remaining countdown time in seconds
            countdownInterval: null,
            countTimeout: null,
            isPaused: false
        }),
        getters: {
            // Getter to format countdown in mm:ss
            formattedCountdown() {
                const minutes = Math.floor(this.countdown / 60).toString().padStart(2, '0')
                const seconds = (this.countdown % 60).toString().padStart(2, '0')
                return `${minutes}:${seconds}`
            },
            status() {
                return this.available
            },
        },
        actions: {
            startCountdown(duration) {
                this.time = duration
                this.countdown = duration
                this.available = false
                this.isPaused = false

                // Start countdown interval
                this.countdownInterval = setInterval(() => {
                    if (this.countdown > 0) {
                        this.countdown -= 1
                    } else {
                        this.clearCountdown()
                    }
                }, 1000)

                // Set a timeout to mark machine as available after countdown
                this.countTimeout = setTimeout(() => {
                    this.available = true
                    this.clearCountdown() // Cleanup after timeout ends
                }, duration * 1000)
            },

            // Clear both countdown interval and timeout
            clearCountdown() {
                if (this.countdownInterval) {
                    clearInterval(this.countdownInterval)
                    this.countdownInterval = null
                }
                if (this.countTimeout) {
                    clearTimeout(this.countTimeout)
                    this.countTimeout = null
                }
                this.available = true
                this.countdown = 0
            },
            pauseCoutdown(){
                this.isPaused = true
                clearInterval(this.countdownInterval);
                clearTimeout(this.countTimeout)
            }
        },
    })()
}
