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

  this.encrypt_character = function(character, rotation) {
    wheel = new RotationWheel
    chars = wheel.characters
    for(var i = 0; i < chars.length; i++) {
      if (chars[i] === character) {
        var new_index = i + this.rotations[rotation]
        if(new_index > (chars.length-1)) {
          return chars[38-new_index]
        } else {
        return chars[new_index];
        }
      }
    }
  }

}

