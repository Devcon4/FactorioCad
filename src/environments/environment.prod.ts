import { env } from 'process';

export const environment = {
  production: true,
  deployUrl: 'FactorioCad',
  urlShortenApiKey: env.URL_SHORTENER_API_KEY
};
