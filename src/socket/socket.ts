import { io } from 'socket.io-client';

export const socket = io('http://localhost:8008');

socket.on('connect', () => {
  console.log('cocket connection: connected');
});

socket.on('disconnect', () => {
  console.log('cocket connection: disconnected');
});

export async function sendMessage(eventName, data = undefined) {
  socket.emit(eventName, data, (val) => {
    console.log(val);
  });
}
