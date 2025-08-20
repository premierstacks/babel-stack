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

  static create(options = {}) {
    return new this({
      plugins: [],
      presets: [],
      ...options,
    });
  }

  clone(config) {
    return new this.constructor(config);
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

  base(options = {}) {
    return this.clone({
      ...this.config,
      comments: true,
      compact: this.babelEnvNodeEnv === 'production',
      minified: this.babelEnvNodeEnv === 'production',
      plugins: [],
      presets: [],
      ...options,
    });
  }

  env(options = {}) {
    return this.clone({
      ...this.config,
      presets: [
        ...this.config.presets,
        [
          '@babel/preset-env',
          {
            bugfixes: true,
            corejs: {
              proposals: false,
              version: '3.45.0',
            },
            modules: false,
            useBuiltIns: 'entry',
            ...options,
          },
        ],
      ],
    });
  }

  typescript(options = {}) {
    return this.clone({
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
    return this.clone({
      ...this.config,
      presets: [
        ...this.config.presets,
        [
          '@babel/preset-react',
          {
            development: this.babelEnvNodeEnv === 'development',
            runtime: 'automatic',
            ...options,
          },
        ],
      ],
    });
  }

  reactCompiler(options = {}) {
    return this.clone({
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
    return this.clone({
      ...this.config,
      plugins: [
        ...this.config.plugins,
        [
          '@stylexjs/babel-plugin',
          {
            dev: this.babelEnvNodeEnv === 'development',
            runtimeInjection: false,
            styleResolution: 'property-specificity',
            treeshakeCompensation: true,
            unstable_moduleResolution: {
              type: 'commonJS',
            },
            ...options,
          },
        ],
      ],
    });
  }

  build() {
    return { ...this.config };
  }
}
