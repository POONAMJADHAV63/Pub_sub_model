// Publisher.js
const readline = require('readline');

class Publisher {
  constructor() {
    this.subscribers = [];
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  publish(message) {
    this.subscribers.forEach(subscriber => {
      subscriber.notify(message);
    });
  }

  start() {
    console.log("Publisher started. Enter your message (press Ctrl+C to exit): ");
    this.rl.on('line', (input) => {
        console.log("Publisher Published the Message Successfully");
      this.publish(input);
     
    });
  }
}

module.exports = Publisher;
