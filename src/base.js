/**
 * @file
 * @author Tomáš Chochola <chocholatom1997@gmail.com>
 * @copyright © 2025 Tomáš Chochola <chocholatom1997@gmail.com>
 *
 * @license CC-BY-ND-4.0
 *
 * @see {@link https://creativecommons.org/licenses/by-nd/4.0/} License
 * @see {@link https://github.com/tomchochola} GitHub Personal
 * @see {@link https://github.com/premierstacks} GitHub Organization
 * @see {@link https://github.com/sponsors/tomchochola} GitHub Sponsors
 */

export function createBabelConfig() {
  return {
    compact: process.env.NODE_ENV === 'production',
    minified: process.env.NODE_ENV === 'production',
    comments: true,
    presets: [],
    plugins: [],
  };
}

export function withPresetEnv(config, _options = {}, override = {}) {
  const defaults = {
    bugfixes: true,
    modules: false,
    useBuiltIns: 'entry',
    corejs: {
      version: '3.45.0',
      proposals: false,
    },
  };

  return {
    ...config,
    presets: [
      ...config.presets,
      [
        '@babel/preset-env',
        {
          ...defaults,
          ...override,
        },
      ],
    ],
  };
}
