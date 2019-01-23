var fetchCommand = function() {  

  const serverUrl = 'http://127.0.0.1:3000';
  
  $.ajax({
    url: serverUrl,
    type: 'GET',
    contentType: '?',
    success: function(data) {
      var command = JSON.parse(data).command;
      SwimTeam.move(command);
    },
    error: function(error) {
      console.error('Error getting data from the server: ', error);
    },
    complete: function() {
      setTimeout(fetchCommand, 25);
    }
  });
};

fetchCommand();

//   // Create WebSocket connection.
// const socket = new WebSocket('ws://localhost:8080');

// // Connection opened
// socket.addEventListener('open', function (event) {
//     console.log('connection established');
//     socket.send('Hello Server!');
// });

// // Listen for messages
// socket.addEventListener('message', function (event) {
//     console.log('message from server via websocket received')
//     console.log('Message from server ', event.data);
// });