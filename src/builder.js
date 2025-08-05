import { createBabelConfig, withPresetEnv } from './base';
import { withPluginReactCompiler, withPluginStylex, withPresetReact } from './react';
import { withPresetTypescript } from './typescript';

export class BabelStack {
  #config;

  constructor(config) {
    this.#config = config;
  }

  static create() {
    return new BabelStack(createBabelConfig());
  }

  env(options, override) {
    return new BabelStack(withPresetEnv(this.#config, options, override));
  }

  typescript(options, override) {
    return new BabelStack(withPresetTypescript(this.#config, options, override));
  }

  react(options, override) {
    return new BabelStack(withPresetReact(this.#config, options, override));
  }

  reactCompiler(options, override) {
    return new BabelStack(withPluginReactCompiler(this.#config, options, override));
  }

  stylex(options, override) {
    return new BabelStack(withPluginStylex(this.#config, options, override));
  }

  build() {
    return { ...this.#config };
  }
}
