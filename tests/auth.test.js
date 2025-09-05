// tests/auth.test.js
const { hashPassword, verifyPassword } = require('../src/auth');


test('hash and verify', () => {
const p = 'senha123';
const h = hashPassword(p);
expect(verifyPassword(p, h)).toBe(true);
expect(verifyPassword('outra', h)).toBe(false);
});