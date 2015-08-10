function RotationWheel() {
  this.characters = 'abcdefghijklmnopqrstuvwxyz123456789 .,'.split('')
}

function EncryptMessage(message) {
  var letters = message.split('');
  var rotationKeys = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D'
  }
  var encrypted = [];
  var key = 0;
  var resetKey = function() {
    key = 0;
  }

  this.solve = function() {
    for(var i = 0; i < letters.length; i++) {
      key++;
      if(i % 4 === 0) {
        resetKey();
      }
      var newChar = this.encryptCharacter(letters[i], rotationKeys[key])
      encrypted.push(newChar);
    }
    return encrypted.join('');
  }

  this.encryptCharacter = function(character, rotation) {
    wheel = new RotationWheel();
    chars = wheel.characters
    for(var i = 0; i < chars.length; i++) {
      if(chars[i] === character) {
        var new_index = i + this.totalRotation(rotation);
        if(new_index > (chars.length-1)) {
          return chars[new_index-38]
        } else {
          return chars[new_index];
        }
      }
    }
  }
}

function Enigma(key, date) {
  this.key = key;
  this.date = date;
  var code = '' + ((date * date) % 10000);

  this.rotations = {
    A: key.split('').slice(0,2).join(''),
    B: key.split('').slice(1,3).join(''),
    C: key.split('').slice(2,4).join(''),
    D: key.split('').slice(3,5).join('')
  }

  this.offsets = {
    A: code[0],
    B: code[1],
    C: code[2],
    D: code[3]
  }

  this.totalRotation = function(rotation) {
    return parseInt(this.rotations[rotation]) + parseInt(this.offsets[rotation]);
  }

  this.encrypt = function(message) {
    var encrypter = new EncryptMessage(message);
    encrypter.solve();
  }


}

// var turing = new Enigma('41521', 021111);
// turing.encrypt("kyra");
