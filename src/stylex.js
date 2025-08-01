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

import { createBabelConfigTypescriptReact } from './react.js';

export function applyBabelPluginStylex(config) {
  config.plugins = config.plugins ?? [];

  config.plugins.push([
    '@stylexjs/babel-plugin',
    {
      dev: process.env.NODE_ENV === 'development',
      runtimeInjection: false,
      treeshakeCompensation: true,
      unstable_moduleResolution: {
        type: 'commonJS',
      },
      styleResolution: 'property-specificity',
    },
  ]);

  return config;
}

export function createBabelConfigTypescriptReactStylex() {
  return applyBabelPluginStylex(createBabelConfigTypescriptReact());
}
