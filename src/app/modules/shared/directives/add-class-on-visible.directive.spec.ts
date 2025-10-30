import { VisibleDirective } from './visible.directive';

describe('AddClassOnVisibleDirective', () => {
  it('should create an instance', () => {
    const directive = new VisibleDirective(null!, null!);
    expect(directive).toBeTruthy();
  });
});
