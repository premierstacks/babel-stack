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

import { createBabelConfigBase } from './base.js';

export function applyBabelPresetTypescript(config) {
  config.presets = config.presets ?? [];

  config.presets.push(['@babel/preset-typescript', {}]);

  return config;
}

export function createBabelConfigTypescript() {
  return applyBabelPresetTypescript(createBabelConfigBase());
}
