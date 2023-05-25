import { render } from '@testing-library/react';

import SimpleBox from './simple-box';

describe('SimpleBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SimpleBox />);
    expect(baseElement).toBeTruthy();
  });
});
