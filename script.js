function sendMessage() {
  const inputField = document.getElementById('user-input');
  const rawInput = inputField.value.trim().toUpperCase();

  if (rawInput === '') return;

  // Display User Message
  appendMessage(inputField.value, 'user');
  inputField.value = '';

  // Encode the user's input to Base64 safely
  let encodedInput = '';
  try {
    encodedInput = btoa(rawInput);
  } catch (e) {
    encodedInput = '';
  }

  setTimeout(() => {
    // RED GROUP: ACCESS_KEY_0812-R3_B
    if (encodedInput === 'QUNDRVNTX0tFWV8wODEyLVIzX0I=') {
      const redLink = '<br><br>👉 <a href="Red-Sector-Obsidian-Override-Dossier.pdf"_blank" style="color: #00ff66; font-weight: bold; text-decoration: underline;">INITIALIZE STEP 8 OVERRIDE</a>';
      appendMessage('[RED SECTOR VERIFIED] Obsidian clearance level granted.' + redLink, 'bot');

    // GREEN GROUP: BOTANICAL_CORE_SYNC
    } else if (encodedInput === 'Qk9UQU5JQ0FMX0NPUkVfU1lOQw==') {
      const greenLink = '<br><br>👉 <a href="Green-Sector-Herbarium-Vault-Dossier.pdf" target="_blank" style="color: #00ff66; font-weight: bold; text-decoration: underline;">INITIALIZE STEP 8 OVERRIDE</a>';
      appendMessage('[GREEN SECTOR VERIFIED] Botanical Codex synchronized.' + greenLink, 'bot');

    // YELLOW GROUP: OBSIDIAN_ROOT_99
    } else if (encodedInput === 'T0JTSURJQU5fUk9PVF85OQ==') {
      const yellowLink = '<br><br>👉 <a href="Yellow Sector - Central Archive Dossier.pdf" target="_blank" style="color: #00ff66; font-weight: bold; text-decoration: underline;">INITIALIZE STEP 8 OVERRIDE</a>';
      appendMessage('[YELLOW SECTOR VERIFIED] Archive sector override confirmed.' + yellowLink, 'bot');

    // HINT
    } else if (encodedInput === 'SElOVA==') {
      appendMessage('HINT: The magnifying glass is the key. Look closely for the password. Enter no spaces.', 'bot');

    } else {
      appendMessage('ERROR: Invalid sector key. Access denied.', 'bot');
    }
  }, 500);
}

function appendMessage(content, sender) {
  const chatBox = document.getElementById('chat-box');
  if (!chatBox) return;

  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message', sender);

  // Using innerHTML allows standard HTML tags (like links) to render
  msgDiv.innerHTML = content;

  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Ensure DOM elements exist before binding event listener
document.addEventListener('DOMContentLoaded', () => {
  const inputEl = document.getElementById('user-input');
  if (inputEl) {
    inputEl.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  }
});
