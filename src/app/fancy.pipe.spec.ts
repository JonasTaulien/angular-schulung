import { FancyPipe } from './fancy.pipe';

describe('FancyPipe', () => {
  it('create an instance', () => {
    const pipe = new FancyPipe();
    expect(pipe).toBeTruthy();
  });
});
