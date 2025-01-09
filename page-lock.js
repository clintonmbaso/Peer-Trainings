document.getElementById('unlockBtn').addEventListener('click', () => {
  // Check if WebAuthn (Biometric Authentication) is available
  if (window.PublicKeyCredential) {
    authenticateWithDevice();
  } else {
    fallbackToPassword();
  }
});

function authenticateWithDevice() {
  navigator.credentials
    .get({
      publicKey: {
        challenge: new Uint8Array(32), // Dummy challenge
        allowCredentials: [],         // Allow any registered credentials
        userVerification: 'required', // Requires user presence
      },
    })
    .then(() => {
      // Authentication successful
      showContent();
    })
    .catch(() => {
      // Authentication failed or not supported
      fallbackToPassword();
    });
}

function fallbackToPassword() {
  const userPassword = prompt('Enter the password to unlock the page:');
  const correctPassword = 's123'; // Set your fallback password here

  if (userPassword === correctPassword) {
    showContent();
  } else {
    alert('Incorrect password. Access denied.');
  }
}

function showContent() {
  document.getElementById('content').style.display = 'block';
  document.getElementById('authPrompt').style.display = 'none';
}