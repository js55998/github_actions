const data = require("../Object")

test('Object Assignment', () => {
    expect(data).toEqual({ one: 1, two: 2 });
});

test('Object Containing', () => {
    expect(data).toEqual(expect.objectContaining({
        one: expect.any(Number),
        two: expect.any(Number)
    }));
});