const calculator = require("./calculator");

test("質數檢定", () => {
    expect(calculator.prime(89)).toBe(true);
});