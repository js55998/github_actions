const num = require('../Truthiness')

test('null', () => {
    expect(num.x).toBeNull();
    expect(num.x).toBeDefined();
    expect(num.x).not.toBeUndefined();
    expect(num.x).not.toBeTruthy();
    expect(num.x).toBeFalsy();
});

test('zero', () => {
    expect(num.y).not.toBeNull();
    expect(num.y).toBeDefined();
    expect(num.y).not.toBeUndefined();
    expect(num.y).not.toBeTruthy();
    expect(num.y).toBeFalsy();
});
