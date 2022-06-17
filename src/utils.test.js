import { getFalse, getTrue } from './utils';

it('should return true', () => {
  expect(getTrue()).toBeTruthy();
});

it('should return false', () => {
  expect(getFalse()).toBeFalsy();
});
