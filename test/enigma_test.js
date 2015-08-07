var expect = chai.expect;

describe('Enigma', function() {

  it('has a key', function() {
    enigma = new Enigma("41521");
    expect(enigma.key).to.equal("41521");
  });

  it('finds rotations from key', function() {
    enigma = new Enigma("41521");
    expect(enigma.rotations['A']).to.equal(41);
    expect(enigma.rotations['D']).to.equal(21);
  });

  it('encrypts one letter', function() {
    enigma = new Enigma("41521");
    var encrypted = enigma.encrypt_character("r","D");
    expect(encrypted).to.equal('a')
  });

  it('encrypts a four letter word', function() {
    enigma = new Enigma("41521");
    var encrypted = enigma.encrypt_message('kyra');
    expect(encrypted).to.equal('nb6v')

  });

  describe('rotationwheel', function () {
    it('has correct characters', function() {
      wheel = new RotationWheel
      expect(wheel.characters.length).to.equal(38)
      expect(wheel.characters[5]).to.equal('f')
    });
  });
});

