function sendMessage() {
  const inputField = document.getElementById('user-input');
  const chatBox = document.getElementById('chat-box');
  const rawInput = inputField.value.trim().toUpperCase(); // Convert to uppercase for uniformity

  if (rawInput === '') return;

  // Display User Message
  appendMessage(inputField.value, 'user');
  inputField.value = '';

  // Convert user input to Base64 to compare against stored theme keys
  const encodedInput = btoa(rawInput);

  setTimeout(() => {
    // RED GROUP KEY: "ACCESS_KEY_0812-R3_B" -> Base64: "QUNDRVNTX0tFWV8wODEyLVIzX0I="
    if (encodedInput === 'QUNDRVNTX0tFWV8wODEyLVIzX0I=') {
      appendMessage('[RED SECTOR VERIFIED] Obsidian clearance level granted. Proceed to Step 8: Security Override.', 'bot');

    // GREEN GROUP KEY: "BOTANICAL_CORE_SYNC" -> Base64: "Qk9UQU5JQ0FMX0NPUkVfU1lOQw=="
    } else if (encodedInput === 'Qk9UQU5JQ0FMX0NPUkVfU1lOQw==') {
      appendMessage('[GREEN SECTOR VERIFIED] Botanical Codex synchronized. Proceed to Step 8: Sector Authorization.', 'bot');

    // YELLOW GROUP KEY: "OBSIDIAN_ROOT_99" -> Base64: "T0JTSURJQU5fUk9PVF85OQ=="
    } else if (encodedInput === 'T0JTSURJQU5fUk9PVF85OQ==') {
      appendMessage('[YELLOW SECTOR VERIFIED] Archive sector override confirmed. Proceed to Step 8: Terminal Unlock.', 'bot');

    // GENERAL HINT: "HINT" -> Base64: "SElOVA=="
    } else if (encodedInput === 'SElOVA==') {
      appendMessage('HINT: Check your dossier PDF properties (File > Info) for your group clearance key.', 'bot');

    } else {
      appendMessage('ERROR: Invalid sector key. Access denied.', 'bot');
    }
  }, 500);
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
