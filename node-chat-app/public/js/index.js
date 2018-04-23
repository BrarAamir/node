var socket = io();

socket.on('connect', function() {
  console.log('connect to server');
});

socket.on('disconnect', function() {
  console.log('Disconnected From Server');
});

socket.on('newMessage', function(message) {
  console.log('newMessage', message);
});

socket.emit(
  'createMessage',
  {
    from: 'Testing',
    text: 'hi',
  },
  function(data) {
    console.log('got it', data);
  }
);
