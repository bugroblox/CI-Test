// the operation should return the sum of 2 numbers
const{addition} = require('./addition')


test('7 + 9 = 16',() => {
    expect(addition(7,9)).toBe(16)
})

test.skip('6 + 9 = 15',() => {
    expect(addition(6,9)).toBe(15)
})
