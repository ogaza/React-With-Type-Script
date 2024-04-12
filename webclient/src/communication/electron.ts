export const electronApi = {
  sendMessage: sendMessage
};

function sendMessage(messageObject) {
  window['electronAPI']?.sendMessage(messageObject);
}
