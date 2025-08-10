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

import { BabelStack } from './builder.js';

export function base(options = {}) {
  const {
    environment = process.env.NODE_ENV ?? 'production',
    env = true,
    typescript: t = false,
    react = false,
    reactCompiler = false,
    stylex = false,
  } = options;

  let config = BabelStack.create({
    environment,
  });

  if (env) {
    config = config.env();
  }

  if (t) {
    config = config.typescript();
  }

  if (react) {
    config = config.react();
  }

  if (reactCompiler) {
    config = config.reactCompiler();
  }

  if (stylex) {
    config = config.stylex();
  }

  return config;
}

export function typescript(options = {}) {
  return base({
    typescript: true,
    ...options,
  });
}

export function typescriptReact(options = {}) {
  return base({
    typescript: true,
    react: true,
    reactCompiler: true,
    ...options,
  });
}

export function typescriptReactStylex(options = {}) {
  return base({
    typescript: true,
    react: true,
    reactCompiler: true,
    stylex: true,
    ...options,
  });
}
