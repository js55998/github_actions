const Numbers = require("../Numbers")

test('two plus two', () => {
    expect(Numbers).toBeGreaterThan(3);
    expect(Numbers).toBeGreaterThanOrEqual(3.5);
    expect(Numbers).toBeLessThan(5);
    expect(Numbers).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(Numbers).toBe(4);
    expect(Numbers).toEqual(4);
});

test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.3);
});