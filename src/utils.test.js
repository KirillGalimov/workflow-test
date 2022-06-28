import { getTrue, getFalse, getNull } from './utils';
// test comment
it('should return true', () => {
  expect(getTrue()).toBeTruthy();
});

it('should return false', () => {
  expect(getFalse()).toBeTruthy();
});

it('should return null', () => {
  expect(getNull()).toBeNull();
});
