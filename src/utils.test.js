import { getTrue, getFalse, getNull } from './utils';
// test cache
it('should return true', () => {
  expect(getTrue()).toBeTruthy();
});

it('should return false', () => {
  expect(getFalse()).toBeFalsy();
});

it('should return null', () => {
  expect(getNull()).toBeNull();
});
