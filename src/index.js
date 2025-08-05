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

import { applyBabelPresetEnv, createBabelConfigBase } from './base.js';
import { applyBabelPluginReactCompiler, applyBabelPluginStylex, applyBabelPresetReact } from './react.js';
import { applyBabelPresetTypescript } from './typescript.js';

export * from './base.js';
export * from './react.js';
export * from './typescript.js';

export function createBabelStack({
  env = false,
  react = false,
  typescript = false,
  stylex = false,
  reactCompiler = false,
}) {
  let stack = createBabelConfigBase();

  if (env) {
    stack = applyBabelPresetEnv(stack);
  }

  if (typescript) {
    stack = applyBabelPresetTypescript(stack);
  }

  if (react) {
    stack = applyBabelPresetReact(stack);
  }

  if (stylex) {
    stack = applyBabelPluginStylex(stack);
  }

  if (reactCompiler) {
    stack = applyBabelPluginReactCompiler(stack);
  }

  return stack;
}
