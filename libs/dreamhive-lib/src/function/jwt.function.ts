import * as jwt from 'jsonwebtoken';

export function generateJwtToken(payload: any, secretKey: string) {
  return jwt.sign(payload, secretKey, { expiresIn: '1d', algorithm: 'HS512' });
}
