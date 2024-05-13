import * as process from 'node:process';

export function getValueFromToken(key: string) {
  return process.env[key];
}
