// Subscriber.js

class Subscriber {
    constructor(name, publisher) {
      this.name = name;
      this.publisher = publisher;
    }
  
    notify(message) {
      console.log(`${this.name} received message: ${message}`);
    }
  
    subscribe() {
      this.publisher.subscribe(this);
    }
  }
  
  module.exports = Subscriber;
  