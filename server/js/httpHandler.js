const headers = require('./cors');
const messageQueue = require('./messageQueue.js');

module.exports = (req, res) => { 
  res.writeHead(200, headers); 
  if (req.method === 'GET') {
    var message = messageQueue.dequeue()
    res.write(JSON.stringify({command: message}))
  } else if (req.method === 'OPTIONS') {
    res.write(JSON.stringify('Successful options query!'))
  }
    res.end();
};
