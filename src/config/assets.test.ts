import { describe, expect, it } from 'vitest';

import { assetPath } from './assets';

describe('assetPath', () => {
  it('prefixes public image paths with the GitHub Pages base path', () => {
    expect(assetPath('/images/common/logo.png')).toBe('/staking/images/common/logo.png');
  });
});
