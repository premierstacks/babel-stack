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

export class BabelStack {
  config;

  constructor(config) {
    this.config = config;
  }

  static create() {
    return new this({
      plugins: [],
      presets: [],
    });
  }

  get babelEnv() {
    return process.env.BABEL_ENV ?? 'production';
  }

  get nodeEnv() {
    return process.env.NODE_ENV ?? 'production';
  }

  get babelEnvNodeEnv() {
    return this.babelEnv ?? this.nodeEnv ?? 'production';
  }

  base() {
    return new this.constructor({
      comments: true,
      compact: this.babelEnvNodeEnv === 'production',
      minified: this.babelEnvNodeEnv === 'production',
      plugins: [],
      presets: [],
      ...this.config,
    });
  }

  env(options = {}) {
    const defaults = {
      bugfixes: true,
      corejs: {
        proposals: false,
        version: '3.45.0',
      },
      modules: false,
      useBuiltIns: 'entry',
    };

    return new this.constructor({
      ...this.config,
      presets: [
        ...this.config.presets,
        [
          '@babel/preset-env',
          {
            ...defaults,
            ...options,
          },
        ],
      ],
    });
  }

  typescript(options = {}) {
    return new this.constructor({
      ...this.config,
      presets: [
        ...this.config.presets,
        [
          '@babel/preset-typescript',
          {
            ...options,
          },
        ],
      ],
    });
  }

  react(options = {}) {
    const defaults = {
      development: this.babelEnvNodeEnv === 'development',
      runtime: 'automatic',
    };

    return new this.constructor({
      ...this.config,
      presets: [
        ...this.config.presets,
        [
          '@babel/preset-react',
          {
            ...defaults,
            ...options,
          },
        ],
      ],
    });
  }

  reactCompiler(options = {}) {
    return new this.constructor({
      ...this.config,
      plugins: [
        [
          'babel-plugin-react-compiler',
          {
            ...options,
          },
        ],
        ...this.config.plugins,
      ],
    });
  }

  stylex(options = {}) {
    const defaults = {
      dev: this.babelEnvNodeEnv === 'development',
      runtimeInjection: false,
      styleResolution: 'property-specificity',
      treeshakeCompensation: true,
      unstable_moduleResolution: {
        type: 'commonJS',
      },
    };

    return new this.constructor({
      ...this.config,
      plugins: [
        ...this.config.plugins,
        [
          '@stylexjs/babel-plugin',
          {
            ...defaults,
            ...options,
          },
        ],
      ],
    });
  }

  build() {
    return this.config;
  }
}
