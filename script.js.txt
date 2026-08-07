function sendMessage() {
  const inputField = document.getElementById('user-input');
  const chatBox = document.getElementById('chat-box');
  const userText = inputField.value.trim().toLowerCase();

  if (userText === '') return;

  // Display User Message
  appendMessage(inputField.value, 'user');
  inputField.value = '';

  // Process Logic / Triggers
  setTimeout(() => {
    if (userText === 'cipher7' || userText === 'unlock') {
      appendMessage('ACCESS GRANTED. Secret Key: [ALPHA-99]. Proceed to Step 8.', 'bot');
    } else if (userText === 'hint') {
      appendMessage('HINT: Look closely at the image header from Step 6.', 'bot');
    } else {
      appendMessage('ERROR: Invalid passphrase. Access denied.', 'bot');
    }
  }, 500); // Small delay to simulate processing
}

function appendMessage(text, sender) {
  const chatBox = document.getElementById('chat-box');
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message', sender);
  msgDiv.textContent = text;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Allow pressing "Enter" to send
document.getElementById('user-input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});
