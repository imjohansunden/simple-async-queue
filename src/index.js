'use strict'

export default class Queue {
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

	add(obj) {
		this.queue.push(obj)
	}
}