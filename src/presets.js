import { BabelStack } from "./builder";

export function base({
  env = true,
}) {
  let config = BabelStack.create();

  if (env) {
    config = config.env();
  }

  return config.build();
}

export function typescript({
  env = true,
}) {
  let config = BabelStack.create();

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
}) {
  let config = BabelStack.create();

  if (compiler) {
    config = config.reactCompiler();
  }

  if (env) {
    config = config.env();
  }

  if (t) {
    config = config.typescript();
  }

  config = config.react();

  if (stylex) {
    config = config.stylex();
  }

  return config.build();
}
