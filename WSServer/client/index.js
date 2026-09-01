const port = 9090;

// Creates a new WebSocket connection to the specified URL.
const socket = new WebSocket(`ws://localhost:${port}`);

socket.addEventListener('open', event => {
  console.log('WebSocket connection established!');
  socket.send('Hello Server!');
});

socket.addEventListener('message', event => {
  console.log('Message from server: ', event.data);
});

socket.addEventListener('close', event => {
  console.log('WebSocket connection closed:', event.code, event.reason);
});

socket.addEventListener('error', error => {
  console.error('WebSocket error:', error);
});