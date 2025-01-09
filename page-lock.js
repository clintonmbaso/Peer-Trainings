const challenge = Uint8Array.from("example-challenge", c => c.charCodeAt(0));
const userId = Uint8Array.from("user-id-12345", c => c.charCodeAt(0));

document.getElementById('registerBtn').addEventListener('click', registerPasskey);
document.getElementById('unlockBtn').addEventListener('click', authenticateWithDevice);

function registerPasskey() {
  const publicKey = {
    challenge: challenge,
    rp: { name: "Example App" }, // Relying Party
    user: {
      id: userId,
      name: "user@example.com",
      displayName: "Example User"
    },
    pubKeyCredParams: [{ alg: -7, type: "public-key" }], // Algorithm
    authenticatorSelection: { userVerification: "required" },
  };

  navigator.credentials.create({ publicKey })
    .then(credential => {
      // Save credential to a database or local storage
      console.log("Passkey registered:", credential);
      alert("Passkey registered successfully!");
    })
    .catch(err => {
      console.error("Error registering passkey:", err);
      alert("Failed to register passkey.");
    });
}

function authenticateWithDevice() {
  const publicKey = {
    challenge: challenge,
    allowCredentials: [{
      id: userId, // Must match the registered credential ID
      type: "public-key",
    }],
    userVerification: "required"
  };

  navigator.credentials.get({ publicKey })
    .then(() => {
      // Authentication successful
      showContent();
    })
    .catch(() => {
      // Fallback to password
      fallbackToPassword();
    });
}

function fallbackToPassword() {
  const userPassword = prompt('Enter the password to unlock the page:');
  const correctPassword = 'secure123'; // Set your fallback password here

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