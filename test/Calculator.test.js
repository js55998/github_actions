const cal = require("../Calculator")

test('adds 1 + 2 to equal 3', () => {
    expect(cal.sum(1, 2)).toBe(3);
});

test('Sub 5 - 3 to equal 2', () => {
    expect(cal.sub(5, 3)).toBe(2);
});
test('Multiply 2*2 to equal 4', () => {
    expect(cal.mul(2, 2)).toBe(4);
});

test('div 15 / 3 to equal 5', () => {
    expect(cal.div(15, 3)).toBe(5);
});


