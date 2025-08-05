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

export function withPresetReact(config, {
  environment = process.env.NODE_ENV ?? 'production',
}, override = {}) {
  const defaults = {
    runtime: 'automatic',
    development: environment === 'development',
  };

  return {
    ...config,
    presets: [
      ...config.presets,
      [
        '@babel/preset-react',
        {
          ...defaults,
          ...override,
        },
      ],
    ],
  };
}

export function withPluginReactCompiler(config, {}, override = {}) {
  const defaults = {};

  return {
    ...config,
    plugins: [
      [
        'babel-plugin-react-compiler',
        {
          ...defaults,
          ...override,
        },
      ],
      ...config.plugins,
    ],
  };
}

export function withPluginStylex(config, {
  environment = process.env.NODE_ENV ?? 'production',
}, override = {}) {
  const defaults = {
    dev: environment === 'development',
    runtimeInjection: false,
    treeshakeCompensation: true,
    unstable_moduleResolution: {
      type: 'commonJS',
    },
    styleResolution: 'property-specificity',
  };

  return {
    ...config,
    plugins: [
      ...config.plugins,
      [
        '@stylexjs/babel-plugin',
        {
          ...defaults,
          ...override,
        },
      ],
    ],
  };
}
