'use strict';

class RotationWheel {
  constructor() {
    this.characters = 'abcdefghijklmnopqrstuvwxyz123456789 .,'.split('')
  }
}

class AlterMessage {
  constructor(key, date) {
    const wheel = new RotationWheel();
    this.chars = wheel.characters;
    this.offsetCode = '' + ((date * date) % 10000);
    this.key = key;
    this.rotationCount = 0;
    this.rotationKeys = {
      0: 'A',
      1: 'B',
      2: 'C',
      3: 'D'
    }
    this.rotations = {
      A: key.split('').slice(0,2).join(''),
      B: key.split('').slice(1,3).join(''),
      C: key.split('').slice(2,4).join(''),
      D: key.split('').slice(3,5).join('')
    }
    this.offsets = {
      A: this.offsetCode[0],
      B: this.offsetCode[1],
      C: this.offsetCode[2],
      D: this.offsetCode[3]
    }
  }

  resetCount () {
    this.rotationCount = 0;
  }

  totalRotation (rotation) {
    return parseInt(this.rotations[rotation]) + parseInt(this.offsets[rotation]);
  }
}

class EncryptMessage extends AlterMessage {
  constructor(message, key, date) {
    super(key, date);
    this.encrypted = [];
    this.letters = message.split('');
  }

  solve () {
    for(let i = 0; i < this.letters.length; i++) {
      this.rotationCount++;
      if(i % 4 === 0) {
       this.resetCount();
      }
      let newChar = this.encryptCharacter(this.letters[i], this.rotationKeys[this.rotationCount])
      this.encrypted.push(newChar);
    }
    return this.encrypted.join('');
  }

  encryptCharacter (character, rotation) {
    for(let i = 0; i < this.chars.length; i++) {
      if(this.chars[i] === character) {
        let new_index = i + this.totalRotation(rotation);
        if(new_index > (this.chars.length-1)) {
          return this.chars[new_index-38]
        } else {
          return this.chars[new_index];
        }
      }
    }
  }
}

class DecryptMessage extends AlterMessage {
  constructor(message, key, date) {
    super(key, date);
    this.letters = message.split('');
    this.decrypted = [];

  solve ()
  }
}

class Enigma {
  constructor(key, date) {
    this.date = date;
    this.key = key;
  }

  encrypt (message) {
    const encrypter = new EncryptMessage(message, this.key, this.date);
    return encrypter.solve();
  }

  decrypt (message) {
    const decrypter = new DecryptMessage(message, this.key, this.date);
    return decrypter.solve();
  }

}

// const turing = new Enigma('41521', 121111);
// turing.encrypt("kyra");
