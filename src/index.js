'use strict'

class SimpleAsyncQueue {
	constructor(options) {
		this.run = this.run.bind(this)
		
		this.callback = options.callback
		this.done = options.done
		this.queue = []
	}

	run() {
		if (this.queue.length) {
	        if (typeof this.callback === 'function') {
	            this.callback(this.queue.shift(), this.run)

	        }
	    } else {
	        if (typeof this.done === 'function') {
	            this.done()
	        }

	        this.queue = []
	    }
	}

	add(item) {
		this.queue = Array.isArray(item) ? [...this.queue, ...item] : [...this.queue, item]
	}
}

module.exports = SimpleAsyncQueue