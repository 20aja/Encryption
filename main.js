let input = document.querySelector(".input");
let output = document.querySelector(".output");
let key = document.querySelector(".key");
let enc = document.querySelector(".enc");
let dec = document.querySelector(".dec");
let reload = document.querySelector(".reload");

// Get Alphabet
let small = "";
for (let i = 97; i <= 122; i++) {
  small += String.fromCharCode(i);
}
let larg = "";
for (let i = 65; i <= 90; i++) {
  larg += String.fromCharCode(i);
}
let alphabet = small+larg;


// Encryption Function
let encWord = "";
enc.onclick = () => {
  for (i in input.value.trim()) {
    if (alphabet.includes(input.value[i])) {
      let orgPositin = alphabet.indexOf(input.value[i]);
      let newPosition = (orgPositin + +key.value) % 52;
      if (newPosition > 0){
        encWord += alphabet[newPosition]
      }else if (newPosition < 0){
        encWord += alphabet[alphabet.length + newPosition]
      }
    } else {
      encWord += input.value[i];
    }
  }
  output.value = encWord;
  encWord = ""
};

// Decryption Function
dec.onclick = () => {
  for (i in input.value) {
    if (alphabet.includes(input.value[i])) {
      let orgPositin = alphabet.indexOf(input.value[i]);
      let newPosition = (orgPositin - +key.value) % 52;
      if (newPosition >= 0){
        encWord += alphabet[newPosition]
      }else if (newPosition < 0){
        encWord += alphabet[alphabet.length + newPosition]
      }
    } else {
      encWord += input.value[i];
    }
  }
  output.value = encWord;
  encWord = ""
};

// Data Cleaning
reload.onclick = () => {
  input.value = "";
  key.value = "";
  output.value = "";
};
