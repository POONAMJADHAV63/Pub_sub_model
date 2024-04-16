const Redis = require('ioredis');
const redis = new Redis();

// Function to publish messages
async function publish(channel, message) {
    await redis.publish(channel, message);
}

// Extract channel name from command-line arguments
const [, , channel, message] = process.argv;

// Check if channel name is provided
if (!channel) {
    console.error('Please provide a channel name.');
    process.exit(1);
}

// Check if message is provided
if (!message) {
    console.error('Please provide a message to publish.');
    process.exit(1);
}

// Example usage
publish(channel, message);
