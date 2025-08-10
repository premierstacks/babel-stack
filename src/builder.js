import { createBabelConfig, withPresetEnv } from './base.js';
import { withPluginReactCompiler, withPluginStylex, withPresetReact } from './react.js';
import { withPresetTypescript } from './typescript.js';
import * as presets from './presets.js';

export class BabelStack {
  #config;
  #options;

  constructor(config, options = {}) {
    this.#config = config;
    this.#options = options;
  }

  static create(options = {}) {
    const merged = {
      ...options,
      environment: options.environment ?? process.env.NODE_ENV ?? 'production',
    };

    return new BabelStack(createBabelConfig(merged), merged);
  }

  env(options = {}, override = {}) {
    return new BabelStack(withPresetEnv(this.#config, {
      ...this.#options,
      ...options,
    }, override), this.#options);
  }

  typescript(options = {}, override = {}) {
    return new BabelStack(withPresetTypescript(this.#config, {
      ...this.#options,
      ...options,
    }, override), this.#options);
  }

  react(options = {}, override = {}) {
    return new BabelStack(withPresetReact(this.#config, {
      ...this.#options,
      ...options,
    }, override), this.#options);
  }

  reactCompiler(options = {}, override = {}) {
    return new BabelStack(withPluginReactCompiler(this.#config, {
      ...this.#options,
      ...options,
    }, override), this.#options);
  }

  stylex(options = {}, override = {}) {
    return new BabelStack(withPluginStylex(this.#config, {
      ...this.#options,
      ...options,
    }, override), this.#options);
  }

  build() {
    return { ...this.#config };
  }

  options(options) {
    return new BabelStack(this.#config, {
      ...this.#options,
      ...options,
    });
  }

  static get presets() {
    return presets;
  }
}
