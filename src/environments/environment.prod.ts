import { env } from 'process';

export const environment = {
  production: true,
  deployUrl: 'FactorioCad',
  urlShortenApiKey: env.URL_SHORTENER_API_KEY,
  firebase: {
    apiKey: "AIzaSyCJMVYfKNYSTM9bBsgg2fypF5XeNkiPmh4",
    authDomain: "factoriocad.firebaseapp.com",
    databaseURL: "https://factoriocad.firebaseio.com",
    projectId: "factoriocad",
    storageBucket: "factoriocad.appspot.com",
    messagingSenderId: "123429148303"
  }
};
