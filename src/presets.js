import { BabelStack } from './builder.js';

export function base({
  env = true,
  environment = process.env.NODE_ENV ?? 'production',
}) {
  let config = BabelStack.create({
    environment,
  });

  if (env) {
    config = config.env();
  }

  return config.build();
}

export function typescript({
  env = true,
  environment = process.env.NODE_ENV ?? 'production',
}) {
  let config = BabelStack.create({
    environment,
  });

  if (env) {
    config = config.env();
  }

  return config.typescript().build();
}

export function react({
  compiler = true,
  env = true,
  stylex = false,
  typescript: t = true,
  environment = process.env.NODE_ENV ?? 'production',
}) {
  let config = BabelStack.create({
    environment,
  });

  if (env) {
    config = config.env();
  }

  if (t) {
    config = config.typescript();
  }

  config = config.react();

  if (compiler) {
    config = config.reactCompiler();
  }

  if (stylex) {
    config = config.stylex();
  }

  return config.build();
}
