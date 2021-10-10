import sinon, { assert } from 'sinon';
import sum from './sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

it('returns the return value from the original function', function () {
  var callback = sinon.fake.returns(42);
  expect(callback()).toBe(42);
});
