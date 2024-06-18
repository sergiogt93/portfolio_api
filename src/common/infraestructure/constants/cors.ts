import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

export const CORS: CorsOptions = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  credentials: true,
};

export const ENV_PATH = `.env.${process.env.NODE_ENV.trim()}`;
