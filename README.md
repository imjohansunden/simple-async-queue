# simple-async-queue

### A simple queue utility for running async tasks one at a time

_The origin of this code is pretty old. Nowadays this could be very easily achieved with promises. But if you are not the promise-person this could be something for you :) _

```javascript	
// Require simple-async-queue
const SimpleAsyncQueue = require("simple-async-queue")

// Create a new instance
// This queue will have a callback that is called for each item, and a done function for when all items has been processed.
const queue = new SimpleAsyncQueue({
    callback: (item, next) => {
	console.log(item)

	// Call the second parameter next when you are done with the current item to continue with the next.
	window.setTimeout(() => next(), 500)
    },
    done: () => console.log("Done!")
})

// Add items to the queue either one by one or pass in an array.
queue.add("foo")
queue.add("bar") 
queue.add(["foo2", "bar2"])

// Start to process queue
queue.run()
```
