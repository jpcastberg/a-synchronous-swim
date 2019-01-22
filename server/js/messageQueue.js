const messages = []; // the storage unit for messages

module.exports.enqueue = (message) => {
  console.log(`Enqueing message: ${message}`);
  messages.push(message);
};

module.exports.dequeue = () => {
  // returns undefined if messages array is empty
  var dequeueing = messages.shift();
  console.log('dequeueing: ' + dequeueing);
  return dequeueing;
};