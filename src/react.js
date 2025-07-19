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

import { createBabelConfigTypescript } from './typescript.js';

export function applyBabelPresetReact(config) {
  config.presets = config.presets ?? [];
  config.plugins = config.plugins ?? [];

  config.plugins.unshift(['babel-plugin-react-compiler', {}]);

  config.presets.push([
    '@babel/preset-react',
    {
      runtime: 'automatic',
      development: process.env.NODE_ENV === 'development',
    },
  ]);

  return config;
}

export function createBabelConfigTypescriptReact() {
  return applyBabelPresetReact(createBabelConfigTypescript());
}
