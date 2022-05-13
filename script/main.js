'use strict';

const encryptForm = document.getElementById('encryptForm');
const decryptForm = document.getElementById('decryptForm');
const encryptedMessageElem = document.getElementById('encryptedMessage');
const decryptedMessageElem = document.getElementById('decryptedMessage');

encryptForm.addEventListener('submit', encryptMessage);
decryptForm.addEventListener('submit', decryptMessage);

function encryptMessage(event) {
  event.preventDefault();
  let message = event.target.message.value;
  let encryptedMessage = caesarCipher(message, 2);
  encryptedMessageElem.innerText = encryptedMessage;
}

function decryptMessage(event) {
  event.preventDefault();
  let message = event.target.message.value;
  let decryptedMessage = caesarCipher(message, -2);
  decryptedMessageElem.innerText = decryptedMessage;
}

function caesarCipher(str, num) {
  str = str.toLowerCase();
  let result = '';
  let charcode = 0;
  for (let i = 0; i < str.length; i++) {
    charcode = str[i].charCodeAt() + num;
    result += String.fromCharCode(charcode);
  }
  return result;
}
