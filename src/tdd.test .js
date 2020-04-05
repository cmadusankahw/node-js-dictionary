//Test Driven Developer Example code

const countLetters = (char, str) => 
    str.split("").filter(l => char === l).length;


describe("TDD ex", () => {

    it("count letters", () => {
        const results = countLetters("p", "happy");
        expect(results).toEqual(2);
    });

})