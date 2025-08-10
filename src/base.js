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

export function createBabelConfig(options = {}) {
  const {
    environment = process.env.NODE_ENV ?? 'production',
  } = options;

  return {
    compact: environment === 'production',
    minified: environment === 'production',
    comments: true,
    presets: [],
    plugins: [],
  };
}

export function withPresetEnv(config, options = {}, override = {}) {
  // eslint-disable-next-line no-empty-pattern
  const {} = options;

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
