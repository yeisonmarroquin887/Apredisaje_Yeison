const OneWord = require("../ejercicios/aprende");



    test('returns the third word from the string', () => {
        const str = "Nunca te rindas el éxito está a tu alcance";
        const expectedResult = ["rindas"];
        
        const result = OneWord(str);
        
        expect(result).toEqual(expectedResult);
      });