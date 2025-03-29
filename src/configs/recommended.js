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

export function recommended() {
  return {
    compact: process.env.NODE_ENV === 'production',
    minified: process.env.NODE_ENV === 'production',
    comments: true,
    presets: [
      [
        '@babel/preset-env',
        {
          bugfixes: true,
          modules: false,
        },
      ],
      ['@babel/preset-typescript', {}],
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
          development: process.env.NODE_ENV === 'development',
        },
      ],
    ],
    plugins: [
      [
        '@stylexjs/babel-plugin',
        {
          dev: process.env.NODE_ENV === 'development',
          runtimeInjection: false,
          genConditionalClasses: true,
          treeshakeCompensation: true,
          unstable_moduleResolution: {
            type: 'commonJS',
          },
          useRemForFontSize: true,
        },
      ],
    ],
  };
}
