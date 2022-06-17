import { getNull, getTrue } from './utils';

it('should return true', () => {
  expect(getTrue()).toBeTruthy();
});

it('should return false', () => {
  expect(getNull()).toBeNull();
});
