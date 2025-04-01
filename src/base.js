/**
 * @file
 * @author Tomáš Chochola <chocholatom1997@gmail.com>
 * @copyright © 2025 Tomáš Chochola <chocholatom1997@gmail.com>
 *
 * @license Apache-2.0
 *
 * @see {@link http://www.apache.org/licenses/LICENSE-2.0} License
 * @see {@link https://github.com/tomchochola} GitHub Personal
 * @see {@link https://github.com/premierstacks} GitHub Organization
 * @see {@link https://github.com/sponsors/tomchochola} GitHub Sponsors
 */

export function createBabelConfigBase() {
  return {
    compact: process.env.NODE_ENV === 'production',
    minified: process.env.NODE_ENV === 'production',
    comments: true,
    presets: [
      [
        '@babel/preset-env',
        {
          debug: process.env.NODE_ENV === 'development',
          bugfixes: true,
          modules: false,
          useBuiltIns: 'entry',
          corejs: {
            version: '3.41',
            proposals: false,
          },
        },
      ],
    ],
  };
}
