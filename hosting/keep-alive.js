const https = require('https');

setInterval(() => {
  https.get('https://61c7a5a8-fbf2-442f-905d-a687daa25c71-00-1kwplgteasmdd.janeway.replit.dev/', (res) => {
    console.log(`statusCode: ${res.statusCode}`);
  }).on('error', (error) => {
    console.error(error);
  });
}, 30000);