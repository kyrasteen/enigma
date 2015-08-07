function RotationWheel() {
  this.characters = 'abcdefghijklmnopqrstuvwxyz123456789 .,'.split('')
}

function Enigma(key) {
  this.key = key;
  this.rotations = {
    A: parseInt(key.split('').slice(0,2).join('')),
    B: parseInt(key.split('').slice(1,3).join('')),
    C: parseInt(key.split('').slice(2,4).join('')),
    D: parseInt(key.split('').slice(3,5).join(''))
  }

  this.encrypt = function(message) {
    var letters = message.split('');
    var rotationKeys = {
      0: 'A',
      1: 'B',
      2: 'C',
      3: 'D'
    }
    var encrypted = [];
    var key = 0;
    for(var i = 0; i < letters.length; i++) {
      key++;
      if (i % 4 === 0) {
        key = 0;
      }
      var newChar = this.encrypt_character(letters[i], rotationKeys[key])
      encrypted.push(newChar);
    }
    return encrypted.join('');
  }

  this.encrypt_character = function(character, rotation) {
    wheel = new RotationWheel
    chars = wheel.characters
    for(var i = 0; i < chars.length; i++) {
      if (chars[i] === character) {
        var new_index = i + this.rotations[rotation]
        if(new_index > (chars.length-1)) {
          return chars[new_index-38]
        } else {
        return chars[new_index];
        }
      }
    }
  }

}

