describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
      assert.strictEqual(abbrevName("Sam Harris"), "S.H");
      assert.strictEqual(abbrevName("Patrick Feenan"), "P.F");
      assert.strictEqual(abbrevName("Evan Cole"), "E.C");
      assert.strictEqual(abbrevName("P Favuzzi"), "P.F");
      assert.strictEqual(abbrevName("David Mendieta"), "D.M");
    });
  });
  


function abbrevName(name){
    return (name.charAt()+"."+name.split(" ")[1].charAt()).toUpperCase()
        // code away
    
    }