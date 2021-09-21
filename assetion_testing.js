//Strict assertion mode

//import {strict as assert } from 'assert';
const assert = require('assert/strict');

assert.deepEqual([[[1,2,3]],4,5],[[[1,2,'3']], 4, 5]);
assert.deepEqual(/a/gi, new Date());

const { message } = new assert.AssertionError({
    actual: 1,
    expected: 2,
    operator: 'strictEqual'
});

try {
    assert.strictEqual(1,2);
} catch (err) {
    assert(err instanceof assert.AssertionError);
    assert.strictEqual(err.message, message);
    assert.strictEqual(err.name, 'AssertionError');
    assert.strictEqual(err.actual, 1);
    assert.strictEqual(err.expected, 2);
    assert.strictEqual(err.code, 'ERR_ASSERION');
    assert.strictEqual(err.operator, 'strictEqual');
    assert.strictEqual(err.generatedMessage, true);
}